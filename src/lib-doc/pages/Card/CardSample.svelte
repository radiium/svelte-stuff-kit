<script lang="ts">
	import { Button, Card, Flexbox, Input, Text, type PropSizeCard } from '$lib/index';

	const sizes: Array<PropSizeCard> = ['1', '2', '3', '4', '5'];
</script>

<Flexbox direction="column" gap="3" alignItems="start" justify="start">
	<h5 class="no-m">Sizes</h5>
	{#each sizes as size}
		<Card {size}>
			<Text {size}>Card size {size}</Text>
		</Card>
	{/each}

	<Card>
		<h2 slot="header">Login</h2>

		<Flexbox direction="column" gap="3">
			<Flexbox direction="column" gap="2">
				<Text>Email</Text>
				<Input size="1" placeholder="email" />
			</Flexbox>
			<Flexbox direction="column" gap="2">
				<Text>Password</Text>
				<Input size="1" placeholder="password" type="password" />
			</Flexbox>
		</Flexbox>

		<svelte:fragment slot="footer">
			<Button color="danger">Cancel</Button>
			<Button color="success">Cancel</Button>
		</svelte:fragment>
	</Card>

	<Card>
		<p>Without header</p>

		<svelte:fragment slot="footer">
			<Button color="danger">Cancel</Button>
			<Button color="success">Cancel</Button>
		</svelte:fragment>
	</Card>

	<Card>
		<p>Without header and footer</p>
	</Card>
</Flexbox>
