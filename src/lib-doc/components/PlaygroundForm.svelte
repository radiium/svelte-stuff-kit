<script lang="ts">
    import { onMount } from 'svelte';
    import { Flexbox, ButtonGroup, Button, Select, Text, Switch, InputNumber, Input } from '$lib/index.js';

    export let schema: any = {
        props: [],
        slots: [],
        events: []
    };
    export let propsString = '';
    export let props = {};
    // export let propsExcluded = [];
    export let onChange = (data) => {};

    void onMount(() => {
        if (schema) {
            props = schema?.props?.reduce((acc, next) => {
                if (next.default !== undefined) {
                    acc[next.name] = next.default;
                }
                return acc;
            }, {});
            onChange({ props, propsString });
        }
    });

    $: onChange({ props, propsString });

    $: propsString = schema.props
        .filter((prop) => prop.name !== 'elementRef')
        .map((prop) => {
            if (prop.type === 'boolean') {
                if (props[prop.name] === true) {
                    return prop.name;
                } else if (!props[prop.name] && prop.default === true) {
                    return `${prop.name}={false}`;
                }
            } else if (props[prop.name] !== undefined && props[prop.name] !== prop.default) {
                return `${prop.name}="${props[prop.name]}"`;
            }
        })
        .join(' ');
</script>

{#if schema && props}
    {#each schema.props as prop}
        <!-- Prop enum -->
        {#if prop.type === 'enum' && prop.values}
            <!-- Prop values > 4 -->
            {#if prop.values?.length > 4}
                <Flexbox direction="column" gap="2">
                    <Text size="2">{prop.name}: {props[prop.name]}</Text>
                    <!-- Prop color only -->
                    {#if prop.name === 'color'}
                        <Flexbox wrap="wrap" gap="3">
                            {#each prop.values as color}
                                <button
                                    class="color-btn"
                                    class:active={color === props[prop.name]}
                                    style:background-color="var(--accent-9)"
                                    data-color={color}
                                    on:click={() => (props[prop.name] = color)}
                                ></button>
                            {/each}
                        </Flexbox>
                    {:else}
                        <Select
                            size="1"
                            bind:value={props[prop.name]}
                            options={prop.values?.map((value) => ({ label: value, value })) ?? []}
                        ></Select>
                    {/if}
                </Flexbox>
            {:else}
                <Flexbox direction="column" gap="2">
                    <Text size="2">{prop.name}</Text>
                    <ButtonGroup>
                        {#each prop.values ?? [] as value}
                            <Button
                                variant="soft"
                                size="1"
                                active={props[prop.name] === value}
                                on:click={() => (props[prop.name] = value)}>{value}</Button
                            >
                        {/each}
                    </ButtonGroup>
                </Flexbox>
            {/if}
        {:else if prop.type === 'boolean'}
            <Flexbox as="label" gap="2" alignItems="center">
                <Switch color="primary" bind:checked={props[prop.name]} />
                <Text size="2">{prop.name}</Text>
            </Flexbox>
        {:else if prop.type === 'number'}
            <Flexbox as="label" direction="column" gap="2">
                <Text size="2">{prop.name}</Text>
                <InputNumber color="primary" bind:value={props[prop.name]} />
            </Flexbox>
        {:else if prop.type === 'string'}
            <Flexbox as="label" direction="column" gap="2">
                <Text size="2">{prop.name}</Text>
                <Input size="1" color="primary" bind:value={props[prop.name]} />
            </Flexbox>
        {/if}
    {/each}
{/if}

<style lang="scss">
    .color-btn {
        border: none;
        height: 30px;
        width: 30px;
        border-radius: 3px;

        &:hover,
        &:focus,
        &.active {
            box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
            outline: none;
        }
    }
</style>
