import { writable, type Updater, type Writable, type StartStopNotifier } from 'svelte/store';
import { isBrowser } from './is-browser';

export enum StorableStorageType {
	local = 'local',
	session = 'session'
}
export interface StorableStorage<T> {
	set<T>(key: string, value: T): void;
	get<T>(key: string): T | null;
	has<T>(key: string): T | boolean;
	remove(key: string): void;
}

export interface Storable<T> extends Writable<T> {
	clearStorage(this: void): void;
}

export interface StorableParams<T> {
	key: string;
	initialValue?: T;
	type?: StorableStorageType;
	start?: StartStopNotifier<T>;
}

function noop(...args: any): any {}
const noopStorage = {
	length: 0,
	setItem: noop,
	getItem: noop,
	has: noop,
	removeItem: noop,
	clear: noop,
	key: noop
};

/**
 * Create local or session storage object
 *
 * @param type
 * @returns
 */
function createStorage<T>(type: StorableStorageType = StorableStorageType.local): StorableStorage<T> {
	let storage: Storage;
	if (isBrowser()) {
		storage = type === StorableStorageType.local ? localStorage : sessionStorage;
	} else {
		storage = noopStorage;
	}

	return {
		set<T>(key: string, value: T): void {
			const json = JSON.stringify(value);
			storage.setItem(key, json);
		},
		get<T>(key: string): T | null {
			const json = storage.getItem(key);
			return json ? JSON.parse(json) : null;
		},
		has<T>(key: string): T | boolean {
			return storage.getItem(key) !== null ? true : false;
		},
		remove(key: string): void {
			storage.removeItem(key);
		}
	};
}

/**
 * Create writable store with recording in local or session storage
 *
 * @param params
 * @returns
 */
export function storable<T>(params: StorableParams<T>): Storable<T> {
	// Destructuring params
	const { key, initialValue, type, start = noop } = params;

	// Init storage
	const storage = createStorage(type);

	// Init store
	const store = writable<T>(initialValue, (set, update) => {
		// Restore state
		const value = storage.get<T>(key);
		if (value) {
			set(value);
		} else if (initialValue) {
			storage.set<T>(key, initialValue);
		}

		// Sync storage from others tabs
		function onStorageChange(event: StorageEvent) {
			if (event.key === key) {
				set(event.newValue ? JSON.parse(event.newValue) : null);
			}
		}

		window.addEventListener('storage', onStorageChange);
		const stop = start && start(set, update);

		return () => {
			window.removeEventListener('storage', onStorageChange);
			stop && stop();
		};
	});

	return {
		...store,
		set(value: T): void {
			store.set(value);
			storage.set(key, value);
		},
		update(callback: Updater<T>): void {
			store.update((last: T) => {
				const value = callback(last);
				storage.set(key, value);
				return value;
			});
		},
		clearStorage(): void {
			storage.remove(key);
		}
	};
}
