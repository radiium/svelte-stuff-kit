<script lang="ts">
    import Cursor from 'phosphor-svelte/lib/Cursor';
    import Hand from 'phosphor-svelte/lib/Hand';
    import LineSegment from 'phosphor-svelte/lib/LineSegment';
    import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';
    import ArrowArcLeft from 'phosphor-svelte/lib/ArrowArcLeft';
    import ArrowArcRight from 'phosphor-svelte/lib/ArrowArcRight';
    import ArrowsInCardinal from 'phosphor-svelte/lib/ArrowsInCardinal';
    import EditorMenu from './EditorMenu.svelte';
    import Toolbar from './Toolbar.svelte';
    import Button from '../components/Button/Button.svelte';

    enum EditorMode {
        default = 'default',
        move = 'move',
        draw = 'draw',
        zoom = 'zoom'
    }
    export let currentMode: EditorMode = EditorMode.default;
</script>

<Toolbar slot="toolbar" direction="vertical" size="large">
    <svelte:fragment slot="center">
        <Button
            color="gray"
            variant="clear"
            size="3"
            iconOnly
            on:click={() => (currentMode = EditorMode.default)}
            active={currentMode === EditorMode.default}
        >
            <Cursor size={24} />
        </Button>
        <Button
            color="gray"
            variant="clear"
            size="3"
            iconOnly
            on:click={() => (currentMode = EditorMode.move)}
            active={currentMode === EditorMode.move}
        >
            <Hand size={24} />
        </Button>
        <Button
            color="gray"
            variant="clear"
            size="3"
            iconOnly
            on:click={() => (currentMode = EditorMode.draw)}
            active={currentMode === EditorMode.draw}
        >
            <LineSegment size={24} />
        </Button>
        <Button
            color="gray"
            variant="clear"
            size="3"
            iconOnly
            on:click={() => (currentMode = EditorMode.zoom)}
            active={currentMode === EditorMode.zoom}
        >
            <MagnifyingGlass size={24} />
        </Button>

        <hr />

        <Button color="gray" variant="clear" iconOnly size="3">
            <ArrowsInCardinal size={24} />
        </Button>
        <Button color="gray" variant="clear" iconOnly size="3">
            <ArrowArcLeft size={24} />
        </Button>
        <Button color="gray" variant="clear" iconOnly size="3">
            <ArrowArcRight size={24} />
        </Button>
    </svelte:fragment>

    <svelte:fragment slot="end">
        <EditorMenu />
    </svelte:fragment>
</Toolbar>
