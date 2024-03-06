import { docInputNumberPropsDefs } from '$lib/components/InputNumber/InputNumber.props';
import { packageName } from '../../../constants';
import type { DocPage } from '../../types';
import InputNumberSample from './InputNumberSample.svelte';

export const docInputNumber: DocPage = {
	id: 'input-number',
	title: 'Input Number',
	demoTitle: 'Examples',
	demoComponent: InputNumberSample,
	sections: [docInputNumberPropsDefs]
};

export const sampleSize = `<script lang="ts">
    import { Flexbox, Text, InputNumber } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Flexbox direction="column" alignItems="start" gap="2">
        <Text>Size 1</Text>
        <InputNumber size="1" />
    </Flexbox>

    <Flexbox direction="column" alignItems="start" gap="2">
        <Text>Size 2</Text>
        <InputNumber size="2" />
    </Flexbox>

    <Flexbox direction="column" alignItems="start" gap="2">
        <Text>Size 3</Text>
        <InputNumber size="3" />
    </Flexbox>
</Flexbox>`;

export const sampleOptions = `<script lang="ts">
    import { Flexbox, Text, InputNumber } from '${packageName}';
</script>

<Flexbox  direction="column" gap="3" alignItems="start">
    <Flexbox direction="column" alignItems="start" gap="2">
        <Text>min=0</Text>
        <InputNumber min={0} />
    </Flexbox>

    <Flexbox direction="column" alignItems="start" gap="2">
        <Text>max=10 value=5</Text>
        <InputNumber max={10} value={5} />
    </Flexbox>

    <Flexbox direction="column" alignItems="start" gap="2">
        <Text>step=5</Text>
        <InputNumber step={5} />
    </Flexbox>
</Flexbox>`;

export const sampleDisabled = `<script lang="ts">
    import { Flexbox, Text, InputNumber } from '${packageName}';
</script>

<Flexbox  direction="column" alignItems="start">
    <InputNumber disabled />
</Flexbox>`;
