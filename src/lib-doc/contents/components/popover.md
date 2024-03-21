---
title: Popover
description: Popover component
---

<script lang="ts">
    import {Popover, Button} from '$lib';
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
            variant="soft"
            slot="trigger"
            let:open
            let:isOpen
            on:click={open}
        >
           Open
        </Button>
        <div slot="content">
            Popover content
        </div>
    </Popover>

    <PlaygroundForm slot="form" bind:props schema={docPopoverPropsDefs} />
</Playground>

## API Reference

<ApiReference data={docPopoverPropsDefs}></ApiReference>
