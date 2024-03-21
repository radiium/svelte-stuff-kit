---
title: Dialog
description: Dialog component
---

<script lang="ts">
    import {Dialog, Button} from '$lib/index.js';
    import {docDialogPropsDefs} from '$lib/components/Dialog/Dialog.props.js';
    import ApiReference from '$lib-doc/components/ApiReference.svelte';
    import Playground from '$lib-doc/components/Playground.svelte';
    import PlaygroundForm from '$lib-doc/components/PlaygroundForm.svelte';

    let isOpen = false
    let props = {}
</script>

## Playground

<Playground>
<div slot="component">
    <Button variant="soft" on:click={() => isOpen = true}>open</Button>
    <Dialog  {...props} bind:isOpen>
        <div>
            Content
            <footer class="mt-6">
                <Button color="primary" variant="soft" on:click={() => isOpen = false} fullWidth>
                    close
                </Button>
            </footer>
        </div>
    </Dialog>
    </div>

    <PlaygroundForm slot="form" bind:props schema={docDialogPropsDefs} />

</Playground>

## API Reference

<ApiReference data={docDialogPropsDefs}></ApiReference>
