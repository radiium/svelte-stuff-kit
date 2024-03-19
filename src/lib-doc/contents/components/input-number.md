---
title: InputNumber
description: InputNumber component
---

<script lang="ts">
    import {InputNumber} from '$lib';
    import {docInputNumberPropsDefs} from '$lib/components/InputNumber/InputNumber.props';
    import ApiReference from '$lib-doc/components/ApiReference.svelte';
    import Playground from '$lib-doc/components/Playground.svelte';
    import PlaygroundForm from '$lib-doc/components/PlaygroundForm.svelte';

    let props = {}
</script>

## Playground

<Playground>
    <InputNumber slot="component" {...props}/>
    <PlaygroundForm slot="form" bind:props schema={docInputNumberPropsDefs} />
</Playground>

## API Reference

<ApiReference data={docInputNumberPropsDefs}></ApiReference>