<script lang="ts">
	import CodeWrapper from './CodeWrapper.svelte';

	export let src: string | undefined;
	export let meta: any | undefined;

	// console.groupCollapsed('Pre');
	// console.log('src', src);
	// console.log('meta', meta);
	// console.groupEnd();
</script>

<CodeWrapper {src} {meta}>
	<svelte:fragment slot="code">
		<slot />
	</svelte:fragment>
</CodeWrapper>
