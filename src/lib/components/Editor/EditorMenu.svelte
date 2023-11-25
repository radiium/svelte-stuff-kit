<script lang="ts">
	import DotsNine from 'phosphor-svelte/lib/DotsNine';
	import { Popover, Button, Flexbox } from '..';
	import ThemeSelect from '../ThemeProvider/ThemeSelect.svelte';
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
		color="neutral"
		mode="clear"
		iconOnly
	>
		<DotsNine size={24} />
	</Button>

	<Flexbox as="div" direction="column" gap="3" slot="content">
		<header>
			<h1 class="no-mt">Settings</h1>
		</header>
		<ul style="list-style: none;" class="no-p no-m">
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
