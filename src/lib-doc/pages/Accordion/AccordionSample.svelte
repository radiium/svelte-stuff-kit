<script>
	import { AccordionGroup, Accordion, Flexbox } from '$lib';
	import { slide } from 'svelte/transition';
</script>

<Flexbox direction="column" gap="3">
	<AccordionGroup>
		<Accordion>
			<h5 slot="header" let:toggle let:isOpen>
				<button on:click={toggle}>{isOpen ? 'close' : 'open'}</button>
				Accordion 1
			</h5>
			<div transition:slide class="p-3">Content 1</div>
		</Accordion>

		<Accordion>
			<h5 slot="header" let:toggle let:isOpen>
				<button on:click={toggle}>{isOpen ? 'close' : 'open'}</button>
				Accordion 2
			</h5>
			<div transition:slide class="p-3">Content 2</div>
		</Accordion>

		<Accordion>
			<h5 slot="header" let:toggle let:isOpen>
				<button on:click={toggle}>{isOpen ? 'close' : 'open'}</button>
				Accordion 3
			</h5>
			<div transition:slide class="p-3">Content 3</div>
		</Accordion>
	</AccordionGroup>
</Flexbox>
