<script lang="ts">
	import { Button, Flexbox, Dialog, Sizes1To4 } from '$lib/index';

	const sizes = Sizes1To4;
	const dialogMap = {
		'1': false,
		'2': false,
		'3': false,
		'4': false
	};

	function mapH(size: (typeof Sizes1To4)[number]) {
		switch (size) {
			case '1':
			case '2':
				return 'h4';
			case '3':
				return 'h3';
			case '4':
				return 'h2';
		}
	}

	let isDialogOpen1 = false;
	let isDialogOpen2 = false;
	let isDialogOpen3 = false;
</script>

<Flexbox direction="column" gap="3" alignItems="start" justify="start">
	<Button size="3" variant="soft" on:click={() => (isDialogOpen1 = true)}>
		open dialog with backdrop dismiss
	</Button>
	<Dialog bind:isOpen={isDialogOpen1} closeOnBackdropClick>
		<svelte:fragment slot="header">Long content dialog</svelte:fragment>
		<svelte:fragment slot="content">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis et eros ut vestibulum.
				Donec pretium, justo vitae convallis dictum, erat sapien rhoncus erat, sed commodo libero neque vitae
				diam. Maecenas finibus interdum leo convallis luctus. Nam ornare iaculis euismod. Cras at commodo
				arcu. Nunc nisl lacus, pulvinar et condimentum quis, pulvinar id augue. Duis purus purus, tincidunt et
				ligula eu, posuere facilisis lorem. Cras feugiat congue elit quis viverra.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis et eros ut vestibulum.
				Donec pretium, justo vitae convallis dictum, erat sapien rhoncus erat, sed commodo libero neque vitae
				diam. Maecenas finibus interdum leo convallis luctus. Nam ornare iaculis euismod. Cras at commodo
				arcu. Nunc nisl lacus, pulvinar et condimentum quis, pulvinar id augue. Duis purus purus, tincidunt et
				ligula eu, posuere facilisis lorem. Cras feugiat congue elit quis viverra.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis et eros ut vestibulum.
				Donec pretium, justo vitae convallis dictum, erat sapien rhoncus erat, sed commodo libero neque vitae
				diam. Maecenas finibus interdum leo convallis luctus. Nam ornare iaculis euismod. Cras at commodo
				arcu. Nunc nisl lacus, pulvinar et condimentum quis, pulvinar id augue. Duis purus purus, tincidunt et
				ligula eu, posuere facilisis lorem. Cras feugiat congue elit quis viverra.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis et eros ut vestibulum.
				Donec pretium, justo vitae convallis dictum, erat sapien rhoncus erat, sed commodo libero neque vitae
				diam. Maecenas finibus interdum leo convallis luctus. Nam ornare iaculis euismod. Cras at commodo
				arcu. Nunc nisl lacus, pulvinar et condimentum quis, pulvinar id augue. Duis purus purus, tincidunt et
				ligula eu, posuere facilisis lorem. Cras feugiat congue elit quis viverra.
			</p>
			<Button size="3" variant="soft" on:click={() => (isDialogOpen2 = true)}>open dialog 2</Button>
		</svelte:fragment>

		<svelte:fragment slot="footer">
			<Button variant="soft" on:click={() => (isDialogOpen1 = false)}>close</Button>
		</svelte:fragment>
	</Dialog>

	<Button size="3" variant="soft" on:click={() => (isDialogOpen2 = true)}>
		open dialog without backdrop dismiss
	</Button>
	<Dialog
		style="max-width: 300px"
		bind:isOpen={isDialogOpen2}
		closeOnBackdropClick={false}
		closeOnEscape={false}
		showCloseButton={false}
	>
		<svelte:fragment slot="header">Normal content dialog</svelte:fragment>
		<svelte:fragment slot="content">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis et eros ut vestibulum.
				Donec pretium, justo vitae convallis dictum, erat sapien rhoncus erat, sed commodo libero neque vitae
				diam. Maecenas finibus interdum leo convallis luctus. Nam ornare iaculis euismod. Cras at commodo
				arcu. Nunc nisl lacus, pulvinar et condimentum quis, pulvinar id augue. Duis purus purus, tincidunt et
				ligula eu, posuere facilisis lorem. Cras feugiat congue elit quis viverra.
			</p>
		</svelte:fragment>
		<svelte:fragment slot="footer">
			<Button variant="outline" on:click={() => (isDialogOpen2 = false)}>cancel</Button>
			<Button color="green" on:click={() => (isDialogOpen2 = false)}>confirm</Button>
		</svelte:fragment>
	</Dialog>

	<Button size="3" variant="soft" on:click={() => (isDialogOpen3 = true)}>open dialog small</Button>
	<Dialog bind:isOpen={isDialogOpen3}>
		<svelte:fragment slot="header">Small content dialog</svelte:fragment>
		<p slot="content">Confirm delete ?</p>
		<svelte:fragment slot="footer">
			<Button size="1" variant="soft" on:click={() => (isDialogOpen3 = false)}>Cancel</Button>
			<Button size="1" color="red" on:click={() => (isDialogOpen3 = false)}>Delete</Button>
		</svelte:fragment>
	</Dialog>

	<h5 class="no-m">Sizes</h5>
	{#each sizes as size}
		<Button {size} variant="soft" on:click={() => (dialogMap[size] = true)}>
			open dialog size {size}</Button
		>
		<Dialog {size} showCloseButton={false} bind:isOpen={dialogMap[size]}>
			<svelte:element this={mapH(size)} slot="header">Dialog content size {size}</svelte:element>
			<p slot="content">Confirm delete ?</p>
			<svelte:fragment slot="footer">
				<Button {size} variant="soft" on:click={() => (dialogMap[size] = false)}>Cancel</Button>
				<Button {size} color="red" on:click={() => (dialogMap[size] = false)}>Delete</Button>
			</svelte:fragment>
		</Dialog>
	{/each}
</Flexbox>
