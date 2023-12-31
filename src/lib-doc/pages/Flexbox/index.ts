import { docPropsFlexbox } from '$lib/components/Flexbox/Flexbox.props';
import { packageName } from '../../../constants';
import type { DocPageData } from '../../types';
import FlexboxSample from './FlexboxSample.svelte';

export const docFlexbox: DocPageData = {
	id: 'flexbox',
	title: 'Flexbox',
	demoTitle: 'Examples',
	demoComponent: FlexboxSample,
	props: docPropsFlexbox,
	slots: [
		{
			default: true
		}
	]
};

export const sampleGap = `<script lang="ts">
    import { Flexbox, Card } from '${packageName}';
</script>

<Flexbox>
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox gap="1">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox gap="2">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox gap="4">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox gap="5">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox gap="6">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox gap="7">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox gap="8">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox gap="9">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>
`;

export const sampleDirection = `<script lang="ts">
    import { Flexbox, Card } from '${packageName}';
</script>

<Flexbox direction="row" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox direction="row-reverse" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox direction="column" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox direction="column-reverse" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>
`;

export const sampleJustify = `<script lang="ts">
    import { Flexbox, Card } from '${packageName}';
</script>

<Flexbox justify="normal" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox justify="start" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox justify="center" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox justify="end" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox justify="around" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox justify="between" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox justify="evenly" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>
`;

export const sampleAlign = `<script lang="ts">
    import { Flexbox, Card } from '${packageName}';
</script>

<Flexbox alignItems="normal" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox alignItems="start" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox alignItems="center" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox alignItems="end" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox alignItems="baseline" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>

<Flexbox alignItems="stretch" gap="3">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
</Flexbox>
`;
