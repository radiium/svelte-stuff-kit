<script lang="ts">
	import { ThemeProvider } from '$lib/index';
	import IconContext from 'phosphor-svelte/lib/IconContext';
	import DocLayout from '../lib-doc/components/DocLayout.svelte';
	import DocHeader from '../lib-doc/components/DocHeader.svelte';
	import DocAside from '../lib-doc/components/DocAside.svelte';
</script>

<ThemeProvider>
	<IconContext values={{ color: 'var(--color)', size: 24 }}>
		<DocLayout>
			<DocHeader slot="header" />
			<DocAside slot="aside" />
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
