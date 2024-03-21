<script lang="ts">
    import { PUBLIC_PKG_NAME } from '$env/static/public';
    import { version } from '$app/environment';
    import { ThemeSelect, Text } from '$lib/index.js';
    import GithubLink from './GithubLink.svelte';
    import Badge from '$lib/components/Badge/Badge.svelte';
</script>

<div class="container pl-3 pr-3">
    <div class="side start">
        <Text size="7" class="mb-2">{PUBLIC_PKG_NAME}</Text>
        <Badge>v{version}</Badge>
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
