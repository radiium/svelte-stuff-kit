<script lang="ts">
    import { PUBLIC_PKG_NAME, PUBLIC_PKG_VERSION } from '$env/static/public';
    import { version } from '$app/environment';
    import { ThemeSelect, Text } from '$lib';
    import GithubLink from './GithubLink.svelte';
</script>

<div class="container pl-3 pr-3">
    <div class="side start" style="display: flex; flex-direction: column;">
        <Text size="5">{PUBLIC_PKG_NAME}</Text>
        <Text size="1" color="neutral">v{version}</Text>
    </div>
    <div class="side end">
        <GithubLink />
        <ThemeSelect placement="bottom-end" />
    </div>
</div>

<style lang="scss">
    .container {
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-3);

        .side {
            position: relative;
            display: flex;
            align-items: center;
            gap: var(--space-3);

            &.start {
                justify-content: flex-start;
            }

            &.end {
                justify-content: flex-end;
            }
        }
    }
</style>
