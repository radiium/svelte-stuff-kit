<script>import Button from './Button.svelte';
</script>

<Button {...$$props} {...$$restProps} iconOnly on:click on:submit on:focus on:blur>
	<slot />
</Button>
