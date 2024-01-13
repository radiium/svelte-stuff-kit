<script lang="ts">
	import { ButtonGroup } from '$lib';
	import Button from '$lib/components/Button/Button.svelte';
	import ButtonIcon from '$lib/components/Button/ButtonIcon.svelte';
	import Flexbox from '$lib/components/Flexbox/Flexbox.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import { DotsThree, Plus, User } from 'phosphor-svelte';

	let active1 = true;
	let active2 = true;
	let active3 = false;
</script>

<Flexbox direction="column" alignItems="start" gap="3" class="p-9">
	<ButtonGroup>
		<Button disabled bind:active={active1}>opt 1</Button>
		<Button bind:active={active2} on:click={() => (active2 = !active2)}>opt 2</Button>
		<Button bind:active={active3} on:click={() => (active3 = !active3)}>opt 3</Button>
	</ButtonGroup>

	<Input placeholder="Login" />
	<Input placeholder="Login" />
</Flexbox>
