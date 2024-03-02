<script lang="ts">
	import { Button, Card, Flexbox, Input, Text, Sizes1To5 } from '$lib/index';

	const sizes = Sizes1To5;
</script>

<Flexbox direction="column" gap="3" alignItems="start" justify="start">
	<h5 class="no-m">Sizes</h5>
	{#each sizes as size}
		<Card {size}>
			<Text {size}>Card size {size}</Text>
		</Card>
	{/each}

	<Card size="3" style="min-width: 300px">
		<Flexbox direction="column" gap="6">
			<header>
				<h3>Login</h3>
			</header>
			<Flexbox direction="column" gap="3">
				<Flexbox direction="column" gap="2">
					<Text>Email</Text>
					<Input size="3" placeholder="email" />
				</Flexbox>
				<Flexbox direction="column" gap="2">
					<Text>Password</Text>
					<Input size="3" placeholder="password" type="password" />
				</Flexbox>
			</Flexbox>

			<Flexbox as="footer" justify="end" gap="3">
				<Button size="3" color="red">Cancel</Button>
				<Button size="3" color="green">Cancel</Button>
			</Flexbox>
		</Flexbox>
	</Card>

	<Card style="min-width: 300px">
		<Flexbox direction="column" gap="6">
			<p>Without header</p>
			<Flexbox as="footer" justify="end" gap="3">
				<Button color="red">Cancel</Button>
				<Button color="green">Cancel</Button>
			</Flexbox>
		</Flexbox>
	</Card>

	<Card>
		<p>Without header and footer</p>
	</Card>
</Flexbox>
