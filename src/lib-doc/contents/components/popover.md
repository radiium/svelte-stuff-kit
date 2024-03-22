---
title: Popover
description: Popover component
---

<script lang="ts">
    import Button from '$lib/components/Button/Button.svelte';
    import Popover from '$lib/components/Popover/Popover.svelte';
    import {docPopoverPropsDefs} from '$lib/components/Popover/Popover.props.js';
    import ApiReference from '$lib-doc/components/ApiReference.svelte';
    import Playground from '$lib-doc/components/Playground.svelte';
    import PlaygroundForm from '$lib-doc/components/PlaygroundForm.svelte';

    let props = {}
</script>

## Playground

<Playground>
    <Popover slot="component" {...props}>
        <Button
            slot="trigger"
            variant="soft"
            let:open
            let:isOpen
            on:click={open}
        >
           Open
        </Button>
        <div>
            Popover content
        </div>
    </Popover>

    <PlaygroundForm slot="form" bind:props schema={docPopoverPropsDefs} />

</Playground>

## API Reference

<ApiReference data={docPopoverPropsDefs}></ApiReference>
