<script lang="ts">
    import DotsNine from 'phosphor-svelte/lib/DotsNine';
    import ThemeSelect from '../components/ThemeProvider/ThemeSelect.svelte';
    import Popover from '../components/Popover/Popover.svelte';
    import Button from '../components/Button/Button.svelte';
    import Flexbox from '../components/Flexbox/Flexbox.svelte';
</script>

<!-- top=""
	bottom="38px"
	left="60px"
	right=""
	transform="" -->
<Popover placement="right-end" offset={20} backdrop>
    <Button
        slot="trigger"
        let:open
        let:isOpen
        on:click={open}
        active={isOpen}
        size="3"
        color="gray"
        variant="clear"
        iconOnly
    >
        <DotsNine size={24} />
    </Button>

    <Flexbox as="div" direction="column" gap="3">
        <header>
            <h1 class="mt-0">Settings</h1>
        </header>
        <ul style="list-style: none;" class="p-0 m-0">
            <li>
                <ThemeSelect />
            </li>
            <li>
                <Button size="2" color="primary">open project</Button>
            </li>
            <li>
                <Button size="2" color="primary">save</Button>
            </li>
        </ul>
        <!-- <footer>
		<Button>Test 5</Button>
	</footer> -->
    </Flexbox>
</Popover>

<style lang="scss">
    //
</style>
