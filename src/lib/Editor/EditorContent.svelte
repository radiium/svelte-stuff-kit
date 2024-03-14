<script lang="ts">
</script>

<svelte:window on:resize={() => {}} />

<div class="wrapper">
    <slot />
</div>

<div class="guides"></div>

<style lang="scss">
    .wrapper {
        transform-style: preserve-3d;
        overscroll-behavior: none;
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
</style>
