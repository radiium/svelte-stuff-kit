<script lang="ts">
	import { Button, Flexbox, Popover } from '$lib';
	import {
		sampleBasic,
		sampleWithBackdrop,
		sampleWithoutArrow,
		sampleOffset,
		samplePlacement,
		sampleMenu
	} from '.';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
</script>

<Flexbox direction="column" gap="5">
	<DocBlocCode title="Basic" code={sampleBasic}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Popover>
				<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
					Popover auto
				</Button>
				<div slot="content">Content</div>
			</Popover>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="With backdrop" code={sampleWithBackdrop}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Popover backdrop={true}>
				<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
					Popover with backdrop
				</Button>
				<div slot="content">Content</div>
			</Popover>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Without arrow" code={sampleWithoutArrow}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Popover arrow={false}>
				<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
					Popover without arrow
				</Button>
				<div slot="content">Content</div>
			</Popover>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Offset" code={sampleOffset}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Popover offset={10} placement="bottom">
				<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
					Popover offset 10
				</Button>
				<div slot="content">Content</div>
			</Popover>

			<Popover offset={50} placement="bottom">
				<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
					Popover offset 50
				</Button>
				<div slot="content">Content</div>
			</Popover>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Direction" code={samplePlacement}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<!-- TOP -->
			<Flexbox offset={10} direction="row" gap="3">
				<Popover placement="top-start">
					<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
						Popover top start
					</Button>
					<div slot="content">top start</div>
				</Popover>
				<Popover offset={10} placement="top">
					<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
						Popover top middle
					</Button>
					<div slot="content">top middle</div>
				</Popover>
				<Popover offset={10} placement="top-end">
					<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
						Popover top end
					</Button>
					<div slot="content">top end</div>
				</Popover>
			</Flexbox>

			<!-- LEFT -->
			<Flexbox direction="row" gap="3">
				<Popover offset={10} placement="left-start">
					<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
						Popover left start
					</Button>
					<div slot="content">left start</div>
				</Popover>
				<Popover offset={10} placement="left">
					<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
						Popover left middle
					</Button>
					<div slot="content">left middle</div>
				</Popover>
				<Popover offset={10} placement="left-end">
					<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
						Popover left end
					</Button>
					<div slot="content">left end</div>
				</Popover>
			</Flexbox>

			<!-- BOTTOM -->
			<Flexbox direction="row" gap="3">
				<Popover offset={10} placement="bottom-start">
					<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
						Popover bottom start
					</Button>
					<div slot="content">bottom start</div>
				</Popover>
				<Popover offset={10} placement="bottom">
					<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
						Popover bottom middle
					</Button>
					<div slot="content">bottom middle</div>
				</Popover>
				<Popover offset={10} placement="bottom-end">
					<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
						Popover bottom end
					</Button>
					<div slot="content">bottom end</div>
				</Popover>
			</Flexbox>

			<!-- RIGHT -->
			<Flexbox direction="row" gap="3">
				<Popover offset={10} placement="right-start">
					<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
						Popover right start
					</Button>
					<div slot="content">right start</div>
				</Popover>
				<Popover offset={10} placement="right">
					<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
						Popover right middle
					</Button>
					<div slot="content">right middle</div>
				</Popover>
				<Popover offset={10} placement="right-end">
					<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
						Popover right end
					</Button>
					<div slot="content">right end</div>
				</Popover>
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Menu" code={sampleMenu}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Popover offset={10} placement="bottom-start" arrow={false}>
				<Button mode="soft" slot="trigger" let:open let:isOpen on:click={open} size="3" color="neutral">
					Menu
				</Button>

				<Flexbox slot="content" direction="column" gap="1" let:close>
					<Button size="2" mode="clear" color="info" fullWidth on:click={close}>Menu item 1</Button>
					<Button size="2" mode="clear" color="info" fullWidth on:click={close}>Menu item 2</Button>
					<Button size="2" mode="clear" color="info" fullWidth on:click={close}>Menu item 3</Button>
					<Button size="2" mode="clear" color="info" fullWidth on:click={close}>Menu item 4</Button>
				</Flexbox>
			</Popover>
		</Flexbox>
	</DocBlocCode>
</Flexbox>
