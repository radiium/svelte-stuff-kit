---
title: Switch
description: Switch component
---

<script lang="ts">
    import {Switch} from '$lib/index.js';
    import {docSwitchPropsDefs} from '$lib/components/Switch/Switch.props.js';
    import ApiReference from '$lib-doc/components/ApiReference.svelte';
    import Playground from '$lib-doc/components/Playground.svelte';
    import PlaygroundForm from '$lib-doc/components/PlaygroundForm.svelte';

    let props = {}
</script>

## Playground

<Playground>
    <Switch slot="component" {...props}/>
    <PlaygroundForm slot="form" bind:props schema={docSwitchPropsDefs} />
</Playground>

## API Reference

<ApiReference data={docSwitchPropsDefs}></ApiReference>
