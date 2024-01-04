<script lang="ts">
	import { ThemeProvider } from '$lib/index';
	import IconContext from 'phosphor-svelte/lib/IconContext';
	import DocLayout from '../lib-doc/components/DocLayout.svelte';
	import DocPageHeader from '../lib-doc/components/DocPageHeader.svelte';
	import DocPageSidebar from '../lib-doc/components/DocPageSidebar.svelte';
</script>

<ThemeProvider>
	<IconContext values={{ color: 'var(--color)', size: 24 }}>
		<DocLayout>
			<DocPageHeader slot="header" />
			<DocPageSidebar slot="aside" />
			<div slot="main" class="content">
				<slot />
			</div>
		</DocLayout>
	</IconContext>
</ThemeProvider>

<style lang="scss">
	.content {
		height: 100%;
		overflow: auto;
	}
</style>
