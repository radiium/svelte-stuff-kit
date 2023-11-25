import type { DocPageData } from '../../types';
import TextareaSample from './TextareaSample.svelte';

export const docTextarea: DocPageData = {
	id: 'textarea',
	title: 'Textarea',
	demoTitle: 'Examples',
	demoComponent: TextareaSample,
	props: [
		{
			name: 'elementRef',
			type: 'HTMLTextAreaElement | undefined'
		},
		{
			name: 'value',
			type: 'string | undefined'
		},
		{
			name: 'checked',
			type: 'boolean',
			defaultValue: 'false'
		},

		{
			name: 'size',
			type: '"1" | "2" | "3"',
			defaultValue: '2'
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: 'false'
		},
		{
			name: 'required',
			type: 'boolean',
			defaultValue: 'false'
		},
		{
			name: 'readonly',
			type: 'boolean',
			defaultValue: 'false'
		},
		{
			name: 'error',
			type: 'boolean',
			defaultValue: 'false'
		},
		{
			name: 'fullWidth',
			type: 'boolean',
			defaultValue: 'false'
		}
	]
};

export const sampleSize = `<script lang="ts">
    import { Flexbox, Text, Textarea } from 'svelte-stuff-kit';
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
    import { Flexbox, Textarea } from 'svelte-stuff-kit';
</script>

<Flexbox slot="demo" direction="column" gap="2" alignItems="start">
    <Textarea
        type="text"
        placeholder="text"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        disabled
    />
</Flexbox>`;
