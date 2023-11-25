<script lang="ts">
	import { Button, Flexbox, Modal, type PropSizeModal } from '$lib';

	const sizes: Array<PropSizeModal> = ['1', '2', '3', '4'];
	const modalMap = {
		'1': false,
		'2': false,
		'3': false,
		'4': false
	};

	function mapH(size: PropSizeModal) {
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

	let isModalOpen1 = false;
	let isModalOpen2 = false;
	let isModalOpen3 = false;
</script>

<Flexbox direction="column" gap="3" alignItems="start" justify="start">
	<Button size="3" mode="soft" on:click={() => (isModalOpen1 = true)}>
		open modal with backdrop dismiss
	</Button>
	<Modal bind:isOpen={isModalOpen1} closeOnBackdropClick>
		<svelte:fragment slot="header">Long content modal</svelte:fragment>
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
			<Button size="3" mode="soft" on:click={() => (isModalOpen2 = true)}>open modal 2</Button>
		</svelte:fragment>

		<svelte:fragment slot="footer">
			<Button mode="soft" on:click={() => (isModalOpen1 = false)}>close</Button>
		</svelte:fragment>
	</Modal>

	<Button size="3" mode="soft" on:click={() => (isModalOpen2 = true)}>
		open modal without backdrop dismiss
	</Button>
	<Modal
		bind:isOpen={isModalOpen2}
		closeOnBackdropClick={false}
		closeOnEscape={false}
		showCloseButton={false}
	>
		<svelte:fragment slot="header">Normal content modal</svelte:fragment>
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
			<Button mode="outline" on:click={() => (isModalOpen2 = false)}>cancel</Button>
			<Button color="success" on:click={() => (isModalOpen2 = false)}>confirm</Button>
		</svelte:fragment>
	</Modal>

	<Button size="3" mode="soft" on:click={() => (isModalOpen3 = true)}>open modal small</Button>
	<Modal bind:isOpen={isModalOpen3}>
		<svelte:fragment slot="header">Small content modal</svelte:fragment>
		<p slot="content">Confirm delete ?</p>
		<svelte:fragment slot="footer">
			<Button size="1" mode="soft" on:click={() => (isModalOpen3 = false)}>Cancel</Button>
			<Button size="1" color="danger" on:click={() => (isModalOpen3 = false)}>Delete</Button>
		</svelte:fragment>
	</Modal>

	<h5 class="no-m">Sizes</h5>
	{#each sizes as size}
		<Button {size} mode="soft" on:click={() => (modalMap[size] = true)}>
			open modal size {size}</Button
		>
		<Modal {size} showCloseButton={false} bind:isOpen={modalMap[size]}>
			<svelte:element this={mapH(size)} slot="header">Modal content size {size}</svelte:element>
			<p slot="content">Confirm delete ?</p>
			<svelte:fragment slot="footer">
				<Button {size} mode="soft" on:click={() => (modalMap[size] = false)}>Cancel</Button>
				<Button {size} color="danger" on:click={() => (modalMap[size] = false)}>Delete</Button>
			</svelte:fragment>
		</Modal>
	{/each}
</Flexbox>
