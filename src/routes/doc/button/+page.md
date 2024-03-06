---
title: Button
description: Button component
---

<script lang="ts">
    import {Button} from '$lib';
    import {docButtonPropsDefs} from '$lib/components/Button/Button.props';
    import DocSectionPropsDefs from '../../../lib-doc/components/DocSectionPropsDefs.svelte';
    import SampleCode from '../../../lib-doc/md/SampleCode.svelte';
</script>

### Usage

#### Import

```svelte
import {Button} from 'svelte-basic';
```

```typescript example
import {Button} from '$lib';
```

### API Reference

<DocSectionPropsDefs data={docButtonPropsDefs}></DocSectionPropsDefs>

### Demo

```bash example
npm install svelte-basic
```

```typescript
const test: string = 'laal';
```

```typescript example
import {Button} from 'svelte-basic';
```

```svelte example hideScript
<script>
	import { Button } from 'svelte-basic';
</script>

<Button color="yellow">button</Button>
```

<!-- <SampleCode>
<svelte:fragment slot="demo">
    <Button color="red">button</Button>
</svelte:fragment>

<Button color="red">button</Button>
</SampleCode> -->

```svelte example hideScript
<script lang="ts">
	import { Button } from 'svelte-basic';
</script>

<Button>button</Button>
```

```svelte example hideScript
<script lang="ts">
	import { Button } from 'svelte-basic';
</script>

<Button size="4">button</Button>
<Button size="3">button</Button>
<Button size="2">button</Button>
<Button size="1">button</Button>
```

```svelte example hideScript
<script lang="ts">
	import { Button } from 'svelte-basic';
</script>

<Button variant="solid">button</Button>
<Button variant="soft">button</Button>
<Button variant="outline">button</Button>
<Button variant="clear">button</Button>
```

```svelte example hideScript
<script lang="ts">
	import { Button } from 'svelte-basic';
</script>

<Button color="neutral">button</Button>
<Button color="primary">button</Button>
<Button color="blue">button</Button>
<Button color="green">button</Button>
<Button color="yellow">button</Button>
<Button color="orange">button</Button>
<Button color="red">button</Button>
```

```svelte example hideScript
<script lang="ts">
	import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';
	import Trash from 'phosphor-svelte/lib/Trash';
	import { Button } from 'svelte-basic';
</script>

<Button variant="clear">
	<MagnifyingGlass />
	button
</Button>
<Button color="primary">
	button
	<MagnifyingGlass />
</Button>
<Button color="blue" variant="soft" iconOnly>
	<MagnifyingGlass />
</Button>
<Button color="primary" iconOnly>
	<MagnifyingGlass />
</Button>
<Button color="red" iconOnly circle>
	<Trash />
</Button>
```

```svelte example hideScript
<script lang="ts">
	import { Button } from 'svelte-basic';
</script>

<Button fullWidth>Button</Button>
```

```svelte example hideScript column
<script lang="ts">
	import { Button } from 'svelte-basic';
</script>

<Button align="start">Button</Button>
<Button align="center">Button</Button>
<Button align="end">Button</Button>
```
