---
title: ThemeProvider
description:
---

<script>
    import {docThemeProviderPropsDefs} from '$lib/theme/ThemeProvider/ThemeProvider.props.ts';
    import ThemeProvider from '$lib/theme/ThemeProvider/ThemeProvider.svelte';
    import ThemeSelect from '$lib/theme/ThemeSelect/ThemeSelect.svelte';
    import Card from '$lib/components/Card/Card.svelte';
    import FlexBox from '$lib/components/FlexBox/FlexBox.svelte';
    import Text from '$lib/components/Text/Text.svelte';
    import Badge from '$lib/components/Badge/Badge.svelte';
    import Input from '$lib/components/Input/Input.svelte';
    import Button from '$lib/components/Button/Button.svelte';
    import ApiReference from '$lib-doc/components/ApiReference.svelte';
    import SampleFormCard from './SampleFormCard.svelte';
</script>

## Description

The <Badge>`<ThemeProvider/>`</Badge> is the entry point of svxui.
It allows you to configure and initialize the light/dark themes.

## Usage

```svelte
<script>
    import { ThemeProvider } from 'svxui';
</script>

<ThemeProvider>
    <!-- Content -->
</ThemeProvider>
```

## Usage

```svelte
<script>
    import { ThemeProvider } from 'svxui';
</script>

<!-- Root theme, default to system -->
<ThemeProvider>
    ...

    <!-- Nested theme, forced dark -->
    <ThemeProvider strategy="dark">
        ...

        <!-- Nested theme, forced light -->
        <ThemeProvider strategy="light">...</ThemeProvider>
    </ThemeProvider>
</ThemeProvider>
```

## API Reference

<ApiReference data={docThemeProviderPropsDefs}></ApiReference>

## Nested theme

The <Badge>`<ThemeProvider/>`</Badge> component can be nested.  
Only the root themProvider will respond to the ThemeSelect change

<ThemeProvider strategy="dark">
    <SampleFormCard title="Forced dark theme">
        <ThemeProvider strategy="light">
            <SampleFormCard title="Forced light theme">
                <ThemeProvider strategy="system">
                    <SampleFormCard  title="Forced sytem theme"/>
                </ThemeProvider>
            </SampleFormCard>
        </ThemeProvider>
    </SampleFormCard>
</ThemeProvider>

## Types

Theme strategy provided by <Badge>`<ThemeProvider/>`</Badge>

```typescript
type ThemeStrategyType = 'dark' | 'light' | 'system';
```

Theme resolved by selected strategy

```typescript
type ThemeSchemeType = 'dark' | 'light';
```

Theme context returned useThemeContext()

```typescript
interface ThemeContext {
    /**
     * true if we are inde root <ThemeProvider/>
     */
    isRoot: boolean;

    /**
     * Readable store of current strategy
     */
    strategy: Readable<ThemeStrategyType>;

    /**
     * Readable store of current resolved theme
     */
    scheme: Readable<ThemeSchemeType>;

    /**
     * function for manualy update strategy of near parent <ThemeProvider>
     */
    updateStrategy: (strategy: ThemeStrategyType) => void;
}
```
