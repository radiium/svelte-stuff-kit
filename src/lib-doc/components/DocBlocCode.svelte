<script lang="ts">
	import Clipboard from 'phosphor-svelte/lib/Clipboard';
	import Check from 'phosphor-svelte/lib/Check';
	import Card from '$lib/components/Card/Card.svelte';
	import Flexbox from '$lib/components/Flexbox/Flexbox.svelte';
	import { Button } from '$lib/components';
	import hljs from 'highlight.js';
	import { hljsDefineSvelte } from './highlight-svelte.config';
	import 'highlight.js/scss/atom-one-dark.scss';

	hljs.registerLanguage('svelte', hljsDefineSvelte);

	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let code: string;

	$: highlighted = hljs.highlight(code, { language: 'svelte' }).value;

	let isCopied: boolean = false;
	let timeoutId: NodeJS.Timeout;
	const copyCode = () => {
		if (isCopied) {
			return;
		}

		navigator.clipboard
			.writeText(code)
			.then(() => {
				isCopied = true;
				clearTimeout(timeoutId);
				timeoutId = setTimeout(() => {
					isCopied = false;
				}, 1800);
			})
			.catch((err) => {
				console.error('Async: Could not copy text: ', err);
			});
	};
</script>

<Flexbox direction="column" gap="4">
	{#if title}
		<h4>{title}</h4>
	{/if}

	{#if description}
		<p>{description}</p>
	{/if}

	<Card size="1" noPadding class="doc-code-wrapper {$$slots.demo ? 'has-demo' : ''}">
		<Flexbox direction="column">
			{#if $$slots.demo}
				<section class="demo-block px-4 py-4">
					<slot name="demo" />
				</section>
			{/if}

			{#if code}
				<section class="code-block">
					<div class="display-flex px-5 py-4">
						<pre><code>{@html highlighted}</code></pre>
					</div>

					<Button size="2" class="copy-btn mt-2 mr-2" mode="soft" iconOnly on:click={copyCode}>
						{#if isCopied}
							<Check />
						{:else}
							<Clipboard />
						{/if}
					</Button>
				</section>
			{/if}
		</Flexbox>
	</Card>
</Flexbox>

<style lang="scss">
	:global(.doc-code-wrapper) {
		overflow: hidden;

		&.has-demo {
			border: 4px solid red;

			.code-block {
				border-radius: var(--radius-4);
			}
		}

		section {
			&.demo-block {
				border-bottom: 1px solid var(--gray-8);
			}

			&.code-block {
				overflow: hidden;
				position: relative;
				background: var(--background-level-2) !important;
				border-radius: 0 0 var(--radius-4) var(--radius-4);

				> div {
					overflow-x: auto;
				}
				pre {
					margin: 0;

					code {
						font-size: 16px;
						background: var(--background-level-2) !important;
					}
				}

				:global(.copy-btn) {
					opacity: 0;
					position: absolute;
					right: 0;
					top: 0;
				}

				&:hover {
					:global(.copy-btn) {
						opacity: 1;
					}
				}
			}
		}
	}
</style>
