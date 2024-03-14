<script lang="ts">
    import { onMount } from 'svelte';
    import { Flexbox, Card, ButtonGroup, Button, Checkbox, Select, Text } from '$lib';
    import { docButtonPropsDefs } from '$lib/components/Button/Button.props';

    export let schema = docButtonPropsDefs;
    export let propsString = '';
    export let props = {};

    onMount(() => {
        if (schema) {
            props = schema?.props?.reduce((acc, next) => {
                if (next.default !== undefined) {
                    acc[next.name] = next.default;
                }
                return acc;
            }, {});
        }
    });

    $: propsString = schema.props
        .filter((prop) => prop.name !== 'elementRef')
        .map((prop) => {
            if (prop.type === 'boolean') {
                if (props[prop.name] === true) {
                    return prop.name;
                } else if (props[prop.name] === false && prop.default === true) {
                    return `${prop.name}={false}`;
                }
            } else if (props[prop.name] !== undefined && props[prop.name] !== prop.default) {
                return `${prop.name}="${props[prop.name]}"`;
            }
        })
        .join(' ');
</script>

{#if schema && props}
    {propsString}
    <hr />
    {JSON.stringify(props)}
    <Card size="1" noPadding>
        <Flexbox>
            <Flexbox as="section" class="p-9" alignItems="center" justify="center" grow="1">
                <slot name="component" />
            </Flexbox>
            <div class="separator"></div>
            <Flexbox direction="column" as="section" alignItems="start" gap="3" class="p-3">
                {#each schema.props as prop}
                    {#if prop.type === 'enum' && prop.values}
                        {#if prop.values?.length > 4}
                            <Flexbox direction="column" gap="1">
                                <Text size="2">{prop.name}</Text>
                                <Select
                                    size="2"
                                    bind:value={props[prop.name]}
                                    options={prop.values?.map((value) => ({ label: value, value })) ?? []}
                                ></Select>
                            </Flexbox>
                        {:else}
                            <Flexbox direction="column" gap="1">
                                <Text size="2">{prop.name}</Text>
                                <ButtonGroup>
                                    {#each prop.values ?? [] as value}
                                        <Button
                                            variant="soft"
                                            active={props[prop.name] === value}
                                            on:click={() => (props[prop.name] = value)}>{value}</Button
                                        >
                                    {/each}
                                </ButtonGroup>
                            </Flexbox>
                        {/if}
                    {/if}

                    {#if prop.type === 'boolean'}
                        <Flexbox direction="column" gap="1">
                            <Text size="2">{prop.name}</Text>
                            <Flexbox as="label" gap="2" alignItems="center">
                                <Checkbox color="primary" bind:checked={props[prop.name]} />
                                <Text size="1">{props[prop.name]}</Text>
                            </Flexbox>
                        </Flexbox>
                    {/if}
                {/each}
            </Flexbox>
        </Flexbox>
    </Card>
{/if}

<style lang="scss">
    .separator {
        width: 1px;
        min-height: 100%;
        background-color: var(--gray-5);
    }
</style>
