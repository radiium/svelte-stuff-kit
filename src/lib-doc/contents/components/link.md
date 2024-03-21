---
title: Link
description: Link component
---

<script lang="ts">
    import {Link} from '$lib';
    import {docLinkPropsDefs} from '$lib/components/Link/Link.props.js';
    import ApiReference from '$lib-doc/components/ApiReference.svelte';
    import Playground from '$lib-doc/components/Playground.svelte';
    import PlaygroundForm from '$lib-doc/components/PlaygroundForm.svelte';

    let props = {}
</script>

## Playground

<Playground >
    <Link {...props} slot="component">Link</Link>
    <PlaygroundForm bind:props schema={docLinkPropsDefs} slot="form" />
</Playground>

## API Reference

<ApiReference data={docLinkPropsDefs}></ApiReference>
