<script lang="ts">
	import UserRectangle from 'phosphor-svelte/lib/UserRectangle';
	import { Flexbox, Input, Text, type PropSizeInput } from '$lib';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
	import { sampleAlign, sampleFullWidth, sampleIcon, sampleSize, sampleState, sampleType } from '.';

	const sizes: Array<PropSizeInput> = ['1', '2', '3'];
</script>

<Flexbox direction="column" gap="5">
	<DocBlocCode title="Size" code={sampleSize}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox direction="column" gap="2">
				<Text size="1">Input text size 1</Text>
				<Input type="text" placeholder="text" size="1" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text size="2">Input text size 2</Text>
				<Input type="text" placeholder="text" size="2" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text size="3">Input text size 3</Text>
				<Input type="text" placeholder="text" size="3" />
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Leading/trailing icons" code={sampleIcon}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox direction="column" gap="2">
				<Text>Input text leading icon</Text>
				<Input type="text" placeholder="text">
					<UserRectangle slot="leading" />
				</Input>
			</Flexbox>
			<Flexbox direction="column" gap="2">
				<Text>Input text trailing icon</Text>
				<Input type="text" placeholder="text">
					<UserRectangle slot="trailing" />
				</Input>
			</Flexbox>
			<Flexbox direction="column" gap="2">
				<Text>Input text both leading trailing icons</Text>
				<Input type="text" placeholder="text">
					<UserRectangle slot="leading" />
					<UserRectangle slot="trailing" />
				</Input>
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Alignment" code={sampleAlign}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox direction="column" gap="2">
				<Text>Input text size 1</Text>
				<Input type="text" placeholder="text" align="start" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text>Input text size 2</Text>
				<Input type="text" placeholder="text" align="center" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text>Input text size 3</Text>
				<Input type="text" placeholder="text" align="end" />
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="States" code={sampleState}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox direction="column" gap="2">
				<Text>Input text</Text>
				<Input type="text" placeholder="text" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text>Input text readonly</Text>
				<Input type="text" placeholder="text" readonly value="lalaland" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text>Input text disabled</Text>
				<Input type="text" placeholder="text" disabled />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text>Input text error</Text>
				<Input type="text" placeholder="text" error />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text>Input text error disabled</Text>
				<Input type="text" placeholder="text" error disabled />
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Type" code={sampleType}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox direction="column" gap="2">
				<Text for="text">Input text</Text>
				<Input id="text" type="text" placeholder="text" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text for="number">Input number</Text>
				<Input id="number" type="number" placeholder="number" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text for="search">Input search</Text>
				<Input id="search" type="search" placeholder="search" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text for="password">Input password</Text>
				<Input id="password" type="password" placeholder="password" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text for="email">Input email</Text>
				<Input id="email" type="email" placeholder="email" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text for="tel">Input tel</Text>
				<Input id="tel" type="tel" placeholder="tel" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text for="url">Input url</Text>
				<Input id="url" type="url" placeholder="url" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text for="date">Input date</Text>
				<Input id="date" type="date" placeholder="date" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text for="datetime-local">Input datetime-local</Text>
				<Input id="datetime-local" type="datetime-local" placeholder="datetime-local" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text for="month">Input month</Text>
				<Input id="month" type="month" placeholder="month" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text for="time">Input time</Text>
				<Input id="time" type="time" placeholder="time" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text for="week">Input week</Text>
				<Input id="week" type="week" placeholder="week" required />
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Full width" code={sampleFullWidth}>
		<Flexbox slot="demo" direction="column" gap="2" alignItems="start">
			<Text>Input text fullWidth</Text>
			<Input type="text" placeholder="text" fullWidth />
		</Flexbox>
	</DocBlocCode>
</Flexbox>
