<script lang="ts">
    import { ThemeProvider } from '$lib/index';
    import IconContext from 'phosphor-svelte/lib/IconContext';
    import DocLayout from '../lib-doc/components/DocLayout.svelte';
    import DocHeader from '../lib-doc/components/DocHeader.svelte';
    import DocSidebar from '../lib-doc/components/DocSidebar.svelte';
    import { navigating } from '$app/stores';
    import '../lib-doc/prism.js.scss';

    let mainRef: HTMLDivElement | null;
    $: {
        if ($navigating) {
            mainRef?.scrollTo({ top: 0, behavior: 'instant' });
        }
    }
</script>

<IconContext values={{ color: 'var(--color)', size: 24 }}>
    <ThemeProvider>
        <DocLayout>
            <DocHeader slot="header" />
            <DocSidebar slot="aside" />
            <div bind:this={mainRef} slot="main" class="content">
                <slot />
            </div>
        </DocLayout>
    </ThemeProvider>
</IconContext>

<style lang="scss">
    .content {
        height: 100%;
        overflow: auto;
    }
</style>
