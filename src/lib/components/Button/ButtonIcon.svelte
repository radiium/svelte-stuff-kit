<script lang="ts">
	import Button from './Button.svelte';
	import type { PropsButton } from './Button.props';

	type $$Props = Omit<PropsButton, 'iconOnly'>;
</script>

<Button {...$$props} {...$$restProps} iconOnly>
	<slot />
</Button>
