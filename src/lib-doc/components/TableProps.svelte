<script lang="ts">
    import Minus from 'phosphor-svelte/lib/Minus';
    import Info from 'phosphor-svelte/lib/Info';
    import type { DocProps } from '../types.js';
    import Card from '$lib/components/Card/Card.svelte';
    import Popover from '$lib/components/Popover/Popover.svelte';
    import Button from '$lib/components/Button/Button.svelte';
    import Flexbox from '$lib/components/Flexbox/Flexbox.svelte';
    import Text from '$lib/components/Text/Text.svelte';

    export let props: DocProps[] = [];
</script>

{#if Array.isArray(props) && props}
    <Card size="0" class="mt-3 mb-5">
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
                        <td data-color="primary">
                            <code class="name">{prop.name}</code>
                        </td>
                        <td data-color="gray">
                            <Flexbox alignItems="center" justify="start" gap="1">
                                <code class="type">{prop.type}</code>
                                {#if prop.values}
                                    <Popover arrow={false}>
                                        <Button
                                            size="1"
                                            iconOnly
                                            color="gray"
                                            variant="clear"
                                            slot="trigger"
                                            let:open
                                            let:isOpen
                                            on:click={open}
                                        >
                                            <Info size="32" />
                                        </Button>
                                        <div slot="content">
                                            {@const values = prop.values}
                                            {#if values}
                                                {#each values as value, i}
                                                    <Text color="gray">"{value}"</Text>
                                                    {#if values.length - 1 > i}
                                                        <span> | </span>
                                                    {/if}
                                                {/each}
                                            {/if}
                                        </div>
                                    </Popover>
                                {/if}
                            </Flexbox>
                        </td>
                        <td data-color="gray">
                            {#if prop.default !== undefined}
                                <code class="default">
                                    {prop.default}
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
{/if}

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
