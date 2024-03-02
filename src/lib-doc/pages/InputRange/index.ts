import { docInputRangeProps } from '$lib/components/InputRange/InputRange.props';
import { packageName } from '../../../constants';
import type { DocPageData } from '../../types';
import InputRangeSample from './InputRangeSample.svelte';

export const docInputRange: DocPageData = {
	id: 'input-range',
	title: 'Input Range',
	demoTitle: 'Examples',
	demoComponent: InputRangeSample,
	props: docInputRangeProps,
	slots: []
};

export const sampleSize = `<script lang="ts">
    import { Flexbox, Text, InputNumber } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Flexbox direction="column" alignItems="start" gap="2">
        <Text>Size 1</Text>
        <InputRange size="1" />
    </Flexbox>

    <Flexbox direction="column" alignItems="start" gap="2">
        <Text>Size 2</Text>
        <InputRange size="2" />
    </Flexbox>

    <Flexbox direction="column" alignItems="start" gap="2">
        <Text>Size 3</Text>
        <InputRange size="3" />
    </Flexbox>
</Flexbox></Flexbox>`;

export const sampleOptions = `<script lang="ts">
    import { Flexbox, Text, InputNumber } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Flexbox direction="column" alignItems="start" gap="2">
        <Text>min=-100 max=100</Text>
        <InputRange value={33} min={-100} max={100} />
    </Flexbox>
    <Flexbox direction="column" alignItems="start" gap="2">
        <Text>min=0 max=10</Text>
        <InputRange value={2} min={0} max={10} />
    </Flexbox>
    <Flexbox direction="column" alignItems="start" gap="2">
        <Text>step=25</Text>
        <InputRange value={25} step={25} />
    </Flexbox>
</Flexbox>`;

export const sampleDisabled = `<script lang="ts">
    import { Flexbox, Text, InputNumber } from '${packageName}';
</script>

<Flexbox  direction="column" alignItems="start">
    <InputNumber disabled />
</Flexbox>`;
