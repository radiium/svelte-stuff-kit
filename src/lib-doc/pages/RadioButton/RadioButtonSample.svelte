<script lang="ts">
	import { Flexbox, RadioButton, Card } from '$lib/index';
	import { sampleInCard, sampleColor, sampleDisabled, sampleSize, sampleWithLabel } from './index';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
	import Text from '$lib/components/Text/Text.svelte';

	let groupSize;
	let groupCard;
	let groupDisabled = '2';
</script>

<Flexbox direction="column" alignItems="start" gap="5">
	<DocBlocCode title="Size" code={sampleSize}>
		<Flexbox slot="demo" gap="3" alignItems="center">
			<RadioButton bind:group={groupSize} value="1" size="1" />
			<RadioButton bind:group={groupSize} value="2" size="2" />
			<RadioButton bind:group={groupSize} value="3" size="3" />
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Color" code={sampleColor}>
		<Flexbox slot="demo" gap="3" alignItems="center">
            <RadioButton color="neutral" />
            <RadioButton color="primary" />
            <RadioButton color="blue" />
            <RadioButton color="green" />
            <RadioButton color="yellow" />
            <RadioButton color="orange" />
            <RadioButton color="red" />
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="With label" code={sampleWithLabel}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox as="label" gap="2" alignItems="center">
				<RadioButton size="2" />
				<Text size="2">label</Text>
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="In card" code={sampleInCard}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<label for="rad1">
                <Card size="1">
                    <Flexbox gap="2" alignItems="center">
                        <RadioButton id="rad1" size="1" value={'2'} bind:group={groupCard} />
                        <Text size="1">Radio button in card 1</Text>
                    </Flexbox>
                </Card>
            </label>

			<label for="rad2">
                <Card size="3">
                    <Flexbox gap="2" alignItems="center">
                        <RadioButton id="rad2" size="3" value={'2'} bind:group={groupCard} />
                        <Text size="3">Radio button in card 2</Text>
                    </Flexbox>
                </Card>
            </label>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Disabled" code={sampleDisabled}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox as="label" gap="2" alignItems="center">
				<RadioButton size="2" disabled bind:group={groupDisabled} value="1" />
				<Text size="2" disabled>Disabled</Text>
			</Flexbox>

			<Flexbox as="label" gap="2" alignItems="center">
				<RadioButton size="2" disabled bind:group={groupDisabled} value="2" />
				<Text size="2" disabled>Disabled checked</Text>
			</Flexbox>
		</Flexbox>
	</DocBlocCode>
</Flexbox>
