<script>
	import { ThemeProvider, ThemeSelect, Card, Flexbox } from '$lib/index';
	import { sampleNestedTheme } from './index';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
</script>

<Flexbox direction="column" gap="5">
	<DocBlocCode title="Nested theme" code={sampleNestedTheme}>
		<ThemeProvider slot="demo" strategy="light">
			<Card>
				<Flexbox gap="3" alignItems="center" class="mb-3">
					hello world
					<ThemeSelect />
				</Flexbox>

				<ThemeProvider strategy="dark">
					<Card>
						<Flexbox gap="3" alignItems="center" class="mb-3">
							hello world nested 1
							<ThemeSelect />
						</Flexbox>

						<ThemeProvider strategy="light">
							<Card>
								<Flexbox gap="3" alignItems="center" class="mb-3">
									hello world nested 2
									<ThemeSelect />
								</Flexbox>
							</Card>
						</ThemeProvider>
					</Card>
				</ThemeProvider>
			</Card>
		</ThemeProvider>
	</DocBlocCode>
</Flexbox>
