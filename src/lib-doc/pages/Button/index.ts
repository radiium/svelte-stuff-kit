import { docButtonPropsDefs } from '$lib/components/Button/Button.props';
import { packageName } from '../../../constants';
import { type DocPage } from '../../types';
import { PageBuilder, SectionBuilder } from '../../utils/builder';
import ButtonSample from './ButtonSample.svelte';

const sectionApi = SectionBuilder.create('Api reference') //
	.addApi(docButtonPropsDefs)
	.get();

const sectionDemo = SectionBuilder.create('Examples') //
	.addDemo(ButtonSample)
	.get();

export const docPageButton: DocPage = PageBuilder.create('Button') //
	.addSection(sectionApi)
	.addSection(sectionDemo)
	.get();

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
    <Button color="blue">button</Button>
    <Button color="green">button</Button>
    <Button color="yellow">button</Button>
    <Button color="orange">button</Button>
    <Button color="red">button</Button>
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
	<Button color="blue" variant="soft" iconOnly>
        <MagnifyingGlass />
    </Button>
	<Button color="primary" iconOnly>
        <MagnifyingGlass />
    </Button>
	<Button color="red" iconOnly circle>
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
