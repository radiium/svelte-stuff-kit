---
title: Installation
description:
---

<script>
    import Badge from '$lib/components/Badge/Badge.svelte';
</script>

### 1. Install svxui

Install <Badge>`svxui`</Badge> with the package manager of your choice

```bash
npm install svxui
pnpm install svxui
yarn add svxui
```

### 2. Add the ThemeProvider component

Wrap your application with the <Badge>`<ThemeProvider/>`</Badge> component in the root <Badge>`+layout.svelte`</Badge>.

```svelte
<script>
    import { ThemeProvider } from 'svxui';
</script>

<ThemeProvider>
    <slot />
</ThemeProvider>
```

### 3. start building

Your app is ready for use <Badge>`svxui`</Badge>!

```svelte
<script>
    import { Button } from 'svxui';
</script>

<Button>Button</Button>
```
