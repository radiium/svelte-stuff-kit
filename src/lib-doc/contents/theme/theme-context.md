---
title: ThemeContext
description: 
---

<script>
    import Badge from '$lib/components/Badge/Badge.svelte';
</script>

## Description  
The <Badge>```useThemeContext()```</Badge> allows access to the context of the closest <Badge>```<ThemeProvider/>```</Badge> component. Will generate an error if used outside of a <Badge>```<ThemeProvider/>```</Badge>.

## Usage

```svelte
<script>
    import { useThemeContext } from 'svxui';

    const { isRoot, scheme, strategy, updateStrategy } = useThemeContext();
</script>
```

## Type

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
