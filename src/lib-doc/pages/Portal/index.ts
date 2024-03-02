import { docPortalProps } from '$lib/components/Portal/Portal.props';
import { packageName } from '../../../constants';
import type { DocPageData } from '../../types';
import PortalSample from './PortalSample.svelte';

export const docPopover: DocPageData = {
	id: 'portal',
	title: 'Portal',
	demoTitle: 'Examples',
	demoComponent: PortalSample,
	props: docPortalProps,
	slots: [
		{
			default: true
		}
	]
};

export const sampleBasic = `<script lang="ts">
    import { Popover, Button } from '${packageName}';
</script>

<Popover>
    <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
        Popover auto
    </Button>
    <div slot="content">Content</div>
</Popover>`;

export const sampleWithBackdrop = `<script lang="ts">
    import { Popover, Button } from '${packageName}';
</script>

<Popover backdrop={true}>
    <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
        Popover with backdrop
    </Button>
    <div slot="content">Content</div>
</Popover>`;

export const sampleWithoutArrow = `<script lang="ts">
    import { Popover, Button } from '${packageName}';
</script>

<Popover arrow={false}>
    <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
        Popover without arrow
    </Button>
    <div slot="content">Content</div>
</Popover>`;

export const sampleOffset = `<script lang="ts">
    import { Flexbox, Popover, Button } from '${packageName}';
</script>

<Flexbox direction="column" gap="3">
    <Popover offset={10} placement="bottom">
        <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
            Popover offset 10
        </Button>
        <div slot="content">Content</div>
    </Popover>

    <Popover offset={50} placement="bottom">
        <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
            Popover offset 50
        </Button>
        <div slot="content">Content</div>
    </Popover>
</Flexbox>`;

export const samplePlacement = `<script lang="ts">
    import { Flexbox, Popover, Button } from '${packageName}';
</script>

<Flexbox  direction="column" alignItems="start">
    <!-- TOP -->
    <Flexbox direction="row" gap="3">
        <Popover offset={10} placement="top-start">
            <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
                Popover top start
            </Button>
            <div slot="content">top start</div>
        </Popover>
        <Popover offset={10} placement="top">
            <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
                Popover top middle
            </Button>
            <div slot="content">top middle</div>
        </Popover>
        <Popover offset={10} placement="top-end">
            <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
                Popover top end
            </Button>
            <div slot="content">top end</div>
        </Popover>
    </Flexbox>

    <!-- LEFT -->
    <Flexbox direction="row" gap="3">
        <Popover offset={10} placement="left-start">
            <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
                Popover left start
            </Button>
            <div slot="content">left start</div>
        </Popover>
        <Popover offset={10} placement="left">
            <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
                Popover left middle
            </Button>
            <div slot="content">left middle</div>
        </Popover>
        <Popover offset={10} placement="left-end">
            <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
                Popover left end
            </Button>
            <div slot="content">left end</div>
        </Popover>
    </Flexbox>

    <!-- BOTTOM -->
    <Flexbox direction="row" gap="3">
        <Popover offset={10} placement="bottom-start">
            <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
                Popover bottom start
            </Button>
            <div slot="content">bottom start</div>
        </Popover>
        <Popover offset={10} placement="bottom">
            <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
                Popover bottom middle
            </Button>
            <div slot="content">bottom middle</div>
        </Popover>
        <Popover offset={10} placement="bottom-end">
            <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
                Popover bottom end
            </Button>
            <div slot="content">bottom end</div>
        </Popover>
    </Flexbox>

    <!-- RIGHT -->
    <Flexbox direction="row" gap="3">
        <Popover offset={10} placement="right-start">
            <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
                Popover right start
            </Button>
            <div slot="content">right start</div>
        </Popover>
        <Popover offset={10} placement="right">
            <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
                Popover right middle
            </Button>
            <div slot="content">right middle</div>
        </Popover>
        <Popover offset={10} placement="right-end">
            <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
                Popover right end
            </Button>
            <div slot="content">right end</div>
        </Popover>
    </Flexbox>
</Flexbox>`;

export const sampleMenu = `<script lang="ts">
    import { Popover, Button } from '${packageName}';
</script>

<Popover offset={10} placement="bottom-start" backdrop={true} arrow={false}>
    <Button variant="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
        Popover bottom start
    </Button>

    <Flexbox slot="content" direction="column" gap="1" let:close>
        <Button size="2" variant="clear" color="blue" fullWidth on:click={close}>Menu item 1</Button>
        <Button size="2" variant="clear" color="blue" fullWidth on:click={close}>Menu item 2</Button>
        <Button size="2" variant="clear" color="blue" fullWidth on:click={close}>Menu item 3</Button>
        <Button size="2" variant="clear" color="blue" fullWidth on:click={close}>Menu item 4</Button>
    </Flexbox>
</Popover>`;
