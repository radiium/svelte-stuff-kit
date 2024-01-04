import { docPropsSelect } from '$lib/components/Select/Select.props';
import { packageName } from '../../../constants';
import type { DocPageData } from '../../types';
import SelectSample from './SelectSample.svelte';

export const docSelect: DocPageData = {
	id: 'select',
	title: 'Select',
	demoTitle: 'Examples',
	demoComponent: SelectSample,
	props: docPropsSelect
};

export const sampleSize = `<script lang="ts">
    import { Flexbox, Text, Select } from '${packageName}';

    const options = [
        { label: 'opt 1', value: 'opt 1' },
        { label: 'opt 2', value: 'opt 2' },
        { label: 'opt 3', value: 'opt 3' },
        { label: 'opt 4', value: 'opt 4' }
    ];
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Flexbox direction="column" alignItems="start" gap="2">
        <Text>Size 1</Text>
        <Select {options} size="1" />
    </Flexbox>

    <Flexbox direction="column" alignItems="start" gap="2">
        <Text>Size 2</Text>
        <Select {options} size="2" />
    </Flexbox>

    <Flexbox direction="column" alignItems="start" gap="2">
        <Text>Size 3</Text>
        <Select {options} size="3" />
    </Flexbox>
</Flexbox></Flexbox>`;

export const sampleMultiple = `<script lang="ts">
    import { Flexbox, Text, InputNumber } from '${packageName}';

    const options = [
        { label: 'opt 1', value: 'opt 1' },
        { label: 'opt 2', value: 'opt 2' },
        { label: 'opt 3', value: 'opt 3' },
        { label: 'opt 4', value: 'opt 4' }
    ];
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Select value={[]} {options} multiple />
</Flexbox></Flexbox>`;

export const sampleDisabled = `<script lang="ts">
    import { Flexbox, Text, InputNumber } from '${packageName}';

    const options = [
        { label: 'opt 1', value: 'opt 1' },
        { label: 'opt 2', value: 'opt 2' },
        { label: 'opt 3', value: 'opt 3' },
        { label: 'opt 4', value: 'opt 4' }
    ];
</script>

<Flexbox direction="column" alignItems="start">
    <Flexbox direction="column" gap="2" alignItems="start">
        <Text>Disabled</Text>
        <Select {options} disabled />
    </Flexbox>

    <Flexbox direction="column" gap="2" alignItems="start">
        <Text>Multiple disabled</Text>
        <Select {options} value={[]} multiple disabled />
    </Flexbox>
</Flexbox>`;
