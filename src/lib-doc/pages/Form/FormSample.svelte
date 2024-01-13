<script lang="ts">
	import { Checkbox, Flexbox, Input, Text, Switch, RadioButton, Card, Button, Textarea } from '$lib';
	import DocBlocCode from '../../components/DocBlocCode.svelte';

	let radioOptions = ['opt1', 'opt2', 'opt3'];
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

	function formSubmit(): void {
		console.log('form submit', formData);
	}
</script>

<DocBlocCode title="Sample form" code="">
	<form slot="demo" on:submit|preventDefault={formSubmit}>
		<Flexbox direction="column" gap="4">
			<div class="row">
				<Flexbox direction="column" gap="2" grow="1">
					<Text>Firstname*</Text>
					<Input type="text" placeholder="Firstname" fullWidth required bind:value={formData.firstname} />
				</Flexbox>

				<Flexbox direction="column" gap="2" grow="1">
					<Text>Firstname*</Text>
					<Input type="text" placeholder="Lastname" fullWidth required bind:value={formData.lastname} />
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
							<Flexbox as="label" gap="2" alignItems="center">
								<RadioButton value={option} bind:group={formData.option} color="primary" />
								<Text size="2">{option}</Text>
							</Flexbox>
						{/each}
					</Flexbox>
				</Flexbox>

				<Flexbox direction="column" gap="2" grow="1">
					<Text>Options 2</Text>
					<Flexbox direction="column" gap="3">
						<Flexbox as="label" gap="2" alignItems="center">
							<Switch bind:checked={formData.newsletter} color="primary" />
							<Text size="2">Newsletter</Text>
						</Flexbox>
						<Flexbox as="label" gap="2" alignItems="center">
							<Checkbox bind:checked={formData.cgu} color="primary" />
							<Text size="2">Accept conditions</Text>
						</Flexbox>
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
