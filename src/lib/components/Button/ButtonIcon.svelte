<script lang="ts">
	import Button from './Button.svelte';
	// import type { PropsButtonIcon } from './Button.props';
	// type $$Props = PropsButtonIcon;
</script>

<Button {...$$props} {...$$restProps} iconOnly>
	<slot />
</Button>
