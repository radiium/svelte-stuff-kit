<script context="module" lang="ts">
	import '../../style.scss';
	import { derived, writable } from 'svelte/store';

	import {
		prefersColorSchemeDark,
		resolveStrategy,
		resolveScheme,
		resolveSchemeSystem,
		setThemeStorage,
		THEME_CONTEXT_KEY,
		THEME_STORAGE_KEY
	} from './theme.utils';
	import {
		ThemeStrategy,
		type ThemeSchemeType,
		type ThemeStrategyType,
		type ThemeContext,
		type PropsThemeProvider,
		defaultPropsThemeProvider
	} from './ThemeProvider.props';

	const schemeSystemStore = writable<ThemeSchemeType>(resolveSchemeSystem());
	const onSchemeSystemChange = () => {
		schemeSystemStore.set(resolveSchemeSystem());
	};
</script>

<script lang="ts">
	import { hasContext, onMount, setContext } from 'svelte';
	import { isBrowser } from '$lib/utils/is-browser';

	export let strategy: PropsThemeProvider['strategy'] = defaultPropsThemeProvider.strategy;

	let isRoot = !hasContext(THEME_CONTEXT_KEY);
	const resolvedStrategy = resolveStrategy(strategy);

	const strategyStore = writable<ThemeStrategyType>(resolvedStrategy);
	const schemeStore = writable<ThemeSchemeType>(resolveScheme(resolvedStrategy));

	$: {
		if ($strategyStore === ThemeStrategy.SYSTEM) {
			schemeStore.set($schemeSystemStore);
		}
	}

	$: {
		if (strategy) {
			strategyStore.set(strategy);
			schemeStore.set(resolveScheme(strategy));
		}
	}

	setContext<ThemeContext>(THEME_CONTEXT_KEY, {
		isRoot,
		strategy: derived(strategyStore, (value) => value),
		scheme: derived(schemeStore, (value) => value),
		updateStrategy: (newStrategy: ThemeStrategyType) => {
			if (isRoot) {
				setThemeStorage(THEME_STORAGE_KEY, newStrategy);
			}
			schemeStore.set(resolveScheme(newStrategy));
			strategyStore.set(newStrategy);
		}
	});

	onMount(() => {
		if (isRoot && isBrowser()) {
			prefersColorSchemeDark.addEventListener('change', onSchemeSystemChange);
			return () => {
				prefersColorSchemeDark.removeEventListener('change', onSchemeSystemChange);
			};
		}
	});
</script>

<!-- <svelte:body class={$themeStore.theme} style={`color-scheme: ${$themeStore.theme};`} /> -->

<!--  data-radius={$themeStore.radius} -->
<div class="radiium-svelte-ui" data-theme={$schemeStore} data-theme-root={isRoot}>
	<slot />
</div>
