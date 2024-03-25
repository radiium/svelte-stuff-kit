<script lang="ts">
    import Card from '$lib/components/Card/Card.svelte';
    import Text from '$lib/components/Text/Text.svelte';
    import Input from '$lib/components/Input/Input.svelte';
    import Button from '$lib/components/Button/Button.svelte';
    import Flexbox from '$lib/components/Flexbox/Flexbox.svelte';

    export let title: string = '';
</script>

<Card>
    <Flexbox direction="column" gap="6" alignItems="start">
        <Flexbox direction="column" gap="3" alignItems="start">
            <Text size="5" weight="bold">{title}</Text>
            <Input placeholder="Login" />
            <Input placeholder="Passwword" type="password" />
            <Button>Submit</Button>
        </Flexbox>

        <slot />
    </Flexbox>
</Card>
