---
title: RadioButton
description: RadioButton component
---

<script lang="ts">
    import {RadioButton} from '$lib';
    import {docRadioButtonPropsDefs} from '$lib/components/RadioButton/RadioButton.props.js';
    import ApiReference from '$lib-doc/components/ApiReference.svelte';
    import Playground from '$lib-doc/components/Playground.svelte';
    import PlaygroundForm from '$lib-doc/components/PlaygroundForm.svelte';

    let props = {}
</script>

## Playground

<Playground>
    <RadioButton slot="component" {...props}/>
    <PlaygroundForm slot="form" bind:props schema={docRadioButtonPropsDefs} />
</Playground>

## API Reference

<ApiReference data={docRadioButtonPropsDefs}></ApiReference>
