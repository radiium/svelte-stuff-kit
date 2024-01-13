import { docPropsButton } from '$lib/components/Button/Button.props';
import { packageName } from '../../../constants';
import type { DocPageData } from '../../types';
import ButtonSample from './ButtonSample.svelte';

export const docButton: DocPageData = {
	id: 'button',
	title: 'Button',
	description: 'Button component',
	demoTitle: 'Examples',
	demoComponent: ButtonSample,
	props: docPropsButton,
	slots: [{ default: true }]
};

export const sample1 = `<script lang="ts">
    import { Button } from '${packageName}';
</script>

<Button>button</Button>`;

export const sampleSize = `<script lang="ts">
    import { Button } from '${packageName}';
</script>

<Flexbox gap="3"> 
    <Button size="4">button</Button>
    <Button size="3">button</Button>
    <Button size="2">button</Button>
    <Button size="1">button</Button>
</Flexbox>`;

export const sampleMode = `<script lang="ts">
    import { Button } from '${packageName}';
</script>

<Flexbox gap="3"> 
    <Button variant="solid">button</Button>
    <Button variant="soft">button</Button>
    <Button variant="outline">button</Button>
    <Button variant="clear">button</Button>
</Flexbox>`;

export const sampleColor = `<script lang="ts">
    import { Button } from '${packageName}';
</script>

<Flexbox gap="3"> 
    <Button color="neutral">button</Button>
    <Button color="primary">button</Button>
    <Button color="info">button</Button>
    <Button color="success">button</Button>
    <Button color="warning">button</Button>
    <Button color="danger">button</Button>
</Flexbox>`;

export const sampleIcon = `<script lang="ts">
    import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';
    import { Button } from '${packageName}';
</script>

<Flexbox gap="3"> 
    <Button variant="clear">
        <MagnifyingGlass />
        button
    </Button>
    <Button color="primary">
        button
        <MagnifyingGlass />
    </Button>
	<Button color="info" variant="soft" iconOnly>
        <MagnifyingGlass />
    </Button>
	<Button color="primary" iconOnly>
        <MagnifyingGlass />
    </Button>
	<Button color="danger" iconOnly circle>
        <Trash />
    </Button>
</Flexbox>`;

export const sampleFullWidth = `<script lang="ts">
    import { Button } from '${packageName}';
</script>

<Flexbox gap="3"> 
    <Button fullWidth>Button</Button>
</Flexbox>`;

export const sampleAlign = `<script lang="ts">
    import { Button } from '${packageName}';
</script>

<Flexbox gap="3"> 
    <Button align="start">Button</Button>
    <Button align="center">Button</Button>
    <Button align="end">Button</Button>
</Flexbox>`;
