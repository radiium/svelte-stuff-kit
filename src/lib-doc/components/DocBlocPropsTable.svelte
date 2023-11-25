<script lang="ts">
	import Minus from 'phosphor-svelte/lib/Minus';
	import type { DocProps } from '../types';
	import Card from '$lib/components/Card/Card.svelte';

	export let props: DocProps[] = [];
</script>

<Card noPadding>
	<table>
		<thead class="rt-TableHeader">
			<tr class="rt-TableRow">
				<th scope="col" style="width: auto;">Prop</th>
				<th scope="col">Type</th>
				<th scope="col">Default</th>
			</tr>
		</thead>
		<tbody>
			{#each props as prop}
				<tr>
					<td data-accent-color="primary">
						<code class="name">{prop.name}</code>
					</td>
					<td data-accent-color="neutral">
						<code class="type">{prop.type}</code>
					</td>
					<td data-accent-color="neutral">
						{#if prop.defaultValue}
							<code class="default">
								{prop.defaultValue}
							</code>
						{:else}
							<Minus color="var(--accent-a11)" size="15" />
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</Card>

<style lang="scss">
	table {
		font-size: var(--font-size-2);
		line-height: var(--line-height-2);
		overflow: hidden;
		width: 100%;
		text-align: left;
		vertical-align: top;
		border-collapse: collapse;
		border-radius: 8px;
		border-spacing: 0;
		box-sizing: border-box;
		height: 0;

		thead {
			tr {
				th {
					background-color: var(--gray-2);
					box-shadow: inset 0 -1px var(--gray-7);
					box-sizing: border-box;
					vertical-align: inherit;
					padding: var(--space-3);
					height: 44px;
				}
			}
		}

		tbody {
			tr {
				--table-row-box-shadow: inset 0 -1px var(--gray-7);

				&:last-child {
					--table-row-box-shadow: none;
				}

				td {
					background-color: var(--background-level-0);
					box-sizing: border-box;
					vertical-align: inherit;
					padding: 12px;
					height: 44px;
					box-shadow: var(--table-row-box-shadow);

					code {
						padding: 0.2em 0.25em 0.25em;
						background-color: var(--accent-a3);
						color: var(--accent-a11);
						font-size: calc(var(--font-size-2) * calc(0.95 * 0.95));
						line-height: var(--line-height-2);
						box-sizing: border-box;
						border-radius: calc(0.5px + 0.2em);
					}
				}
			}
		}
	}
</style>
