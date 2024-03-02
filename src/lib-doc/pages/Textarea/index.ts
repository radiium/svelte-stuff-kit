import { docTextareaProps } from '$lib/components/Textarea/Textarea.props';
import { packageName } from '../../../constants';
import type { DocPageData } from '../../types';
import TextareaSample from './TextareaSample.svelte';

export const docTextarea: DocPageData = {
	id: 'textarea',
	title: 'Textarea',
	demoTitle: 'Examples',
	demoComponent: TextareaSample,
	props: docTextareaProps
};

export const sampleSize = `<script lang="ts">
    import { Flexbox, Text, Textarea } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Flexbox direction="column" gap="2">
        <Text size="1">Input text size 1</Text>
        <Textarea type="text" placeholder="text" size="1" />
    </Flexbox>

    <Flexbox direction="column" gap="2">
        <Text size="2">Input text size 2</Text>
        <Textarea type="text" placeholder="text" size="2" />
    </Flexbox>

    <Flexbox direction="column" gap="2">
        <Text size="3">Input text size 3</Text>
        <Textarea type="text" placeholder="text" size="3" />
    </Flexbox>
</Flexbox>`;

export const sampleDisabled = `<script lang="ts">
    import { Flexbox, Textarea } from '${packageName}';
</script>

<Flexbox slot="demo" direction="column" gap="2" alignItems="start">
    <Textarea
        type="text"
        placeholder="text"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        disabled
    />
</Flexbox>`;
