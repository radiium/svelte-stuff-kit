<script lang="ts">
	import IdentificationCard from 'phosphor-svelte/lib/IdentificationCard';
	import { Checkbox, Flexbox, Input, Text, Switch, RadioButton, Card } from '$lib/index';
	import Button from '$lib/components/Button/Button.svelte';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
	import Textarea from '$lib/components/Textarea/Textarea.svelte';

	let radioOptions = ['opt1', 'opt2', 'opt3'];
	let radioSelection;

	let formData = {
		firstname: '',
		lastname: '',
		address: '',
		zipcode: '',
		city: '',
		coment: '',
		count: '0',
		date: undefined,
		option: radioOptions[0],
		newsletter: true,
		cgu: false
	};

	$: data = JSON.stringify(formData, null, 2);

	function formSubmit(event): void {
		const formData = new FormData(event.target);
		console.log('form submit', [...formData]);
	}
</script>

<DocBlocCode title="Sample form" code="">
	<form slot="demo" on:submit|preventDefault={formSubmit}>
		<Flexbox direction="column" gap="4">
			<div class="row">
				<Flexbox direction="column" gap="2" grow="1">
					<Text>Firstname*</Text>
					<Input type="text" placeholder="Firstname" fullWidth required bind:value={formData.firstname}>
						<IdentificationCard slot="leading" />
					</Input>
				</Flexbox>

				<Flexbox direction="column" gap="2" grow="1">
					<Text>Firstname*</Text>
					<Input type="text" placeholder="Lastname" fullWidth required bind:value={formData.lastname}>
						<IdentificationCard slot="trailing" />
					</Input>
				</Flexbox>
			</div>

			<Flexbox direction="column" gap="2">
				<Text>Adresse</Text>
				<Input type="text" placeholder="Adresse" fullWidth bind:value={formData.address} />
			</Flexbox>

			<div class="row">
				<Flexbox direction="column" gap="2" grow="1">
					<Text>Zipcode</Text>
					<Input type="text" placeholder="Zipcode" fullWidth bind:value={formData.zipcode} />
				</Flexbox>
				<Flexbox direction="column" gap="2" grow="1">
					<Text>City</Text>
					<Input type="text" placeholder="City" fullWidth bind:value={formData.city} />
				</Flexbox>
			</div>

			<div class="row">
				<Flexbox direction="column" gap="2" grow="1">
					<Text>Count</Text>
					<Input
						type="number"
						placeholder="count"
						min="0"
						max="100"
						step="10"
						fullWidth
						bind:value={formData.count}
					/>
				</Flexbox>
				<Flexbox direction="column" gap="2" grow="1">
					<Text>Date</Text>
					<Input type="date" placeholder="date" fullWidth bind:value={formData.date} />
				</Flexbox>
			</div>

			<Flexbox direction="column" gap="2">
				<Text>Comment</Text>
				<Textarea type="text" placeholder="Comment" rows="8" fullWidth bind:value={formData.coment} />
			</Flexbox>

			<div class="row">
				<Flexbox direction="column" gap="2" grow="1">
					<Text>Options 1</Text>
					<Flexbox direction="column" gap="2">
						{#each radioOptions as option}
							<RadioButton value={option} bind:group={formData.option} color="primary">{option}</RadioButton>
						{/each}
					</Flexbox>
				</Flexbox>

				<Flexbox direction="column" gap="2" grow="1">
					<Text>Options 2</Text>
					<Flexbox direction="column" gap="3">
						<Switch bind:checked={formData.newsletter} color="primary">Newsletter</Switch>
						<Checkbox bind:checked={formData.cgu} color="primary">Accept conditions</Checkbox>
					</Flexbox>
				</Flexbox>
			</div>

			<Flexbox justify="end" class="mt-5" gap="3">
				<Button color="warning" variant="outline">cancel</Button>
				<Button color="primary" type="submit">Submit</Button>
			</Flexbox>
		</Flexbox>
	</form>
</DocBlocCode>

<h5>Data</h5>
<Card>
	<pre><code>{data}</code></pre>
</Card>

<style lang="scss">
	.row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: var(--space-5);
	}
</style>
