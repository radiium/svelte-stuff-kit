<script lang="ts">
	import Button from './Button.svelte';
	import type { PropsButtonIcon } from './Button.props';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	type $$Props = PropsButtonIcon & HTMLButtonAttributes;
</script>

<Button {...$$props} {...$$restProps} iconOnly on:click on:submit on:focus on:blur>
	<slot />
</Button>
