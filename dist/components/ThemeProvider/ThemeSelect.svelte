<script>import AppWindow from 'phosphor-svelte/lib/AppWindow';
import Moon from 'phosphor-svelte/lib/Moon';
import Sun from 'phosphor-svelte/lib/Sun';
import { useThemeContext } from './theme.utils';
import Popover from '../Popover/Popover.svelte';
import Button from '../Button/Button.svelte';
import Flexbox from '../Flexbox/Flexbox.svelte';
import { ThemeStrategy } from './ThemeProvider.types';
const themeContext = useThemeContext();
const { strategy, updateStrategy = () => { } } = themeContext;
const themeOptions = [
    { icon: AppWindow, label: 'system', value: ThemeStrategy.SYSTEM },
    { icon: Sun, label: 'light', value: ThemeStrategy.LIGHT },
    { icon: Moon, label: 'dark', value: ThemeStrategy.DARK }
];
let currentTheme = themeOptions.find((opts) => opts.value === $strategy);
const selectTheme = (option) => {
    currentTheme = option;
    updateStrategy(option.value);
};
</script>

<!-- placement="bottom" -->
<Popover placement="top" offset={10} backdrop>
	<Button
		slot="trigger"
		let:open
		let:isOpen
		on:click={open}
		active={isOpen}
		size="2"
		color="neutral"
		variant="outline"
		iconOnly={false}
	>
		{#if currentTheme}
			<svelte:component this={currentTheme.icon} />
			{currentTheme.label}
		{/if}
	</Button>

	<Flexbox slot="content" direction="column" gap="1" class="no-p no-m" style="position: relative;" let:close>
		{#each themeOptions as option}
			<Button
				size="2"
				variant="clear"
				align="start"
				fullWidth
				on:click={() => {
					close();
					selectTheme(option);
				}}
			>
				<svelte:component this={option.icon} />
				{option.label}
			</Button>
		{/each}
	</Flexbox>
</Popover>

<!-- <Select
	class={$$restProps.class}
	options={themeOptions}
	value={$themeStore.theme}
	on:input={handleChange}
	on:input
	on:change
	on:focus
	on:blur
/> -->
