---
title: ThemeSelect
description: Customize theme of components
---

<script>
    import {docThemeProviderPropsDefs} from '$lib/theme/ThemeProvider/ThemeProvider.props.ts';
    import ThemeProvider from '$lib/theme/ThemeProvider/ThemeProvider.svelte';
    import ThemeSelect from '$lib/theme/ThemeSelect/ThemeSelect.svelte';
    import Card from '$lib/components/Card/Card.svelte';
    import Flexbox from '$lib/components/Flexbox/Flexbox.svelte';
    import Text from '$lib/components/Text/Text.svelte';
    import Badge from '$lib/components/Badge/Badge.svelte';
    import Input from '$lib/components/Input/Input.svelte';
    import Button from '$lib/components/Button/Button.svelte';
    import ApiReference from '$lib-doc/components/ApiReference.svelte';
</script>


## API Reference

<ApiReference data={docThemeProviderPropsDefs}></ApiReference>


## ```<ThemeSelect/>```
```svelte example
<script>
    import { ThemeSelect } from 'svxui';
</script>

<ThemeSelect/>
```

## Nested theme
ThemeProvider can be nested.  
Only the root themProvider will respond to the ThemeSelect change

<ThemeProvider strategy="dark">
    <Card>
        <Flexbox direction="column" gap="3">
            <Text size="5" weightt="bold">Forced Dark theme</Text>
            <Input placeholder="Login"/>
            <Input placeholder="Passwword" type="passwword"/>
            <Button>Submit</Button>
            <ThemeProvider strategy="light">
                <Card class="mt-7">
                    <Flexbox direction="column" gap="3">
                        <Text size="5" weightt="bold">Forced Light theme</Text>
                        <Input placeholder="Login"/>
                        <Input placeholder="Passwword" type="passwword"/>
                        <Button>Submit</Button>
                         <ThemeProvider strategy="system">
                            <Card class="mt-7">
                                <Flexbox direction="column" gap="3">
                                    <Text size="5" weightt="bold">User theme</Text>
                                    <Input placeholder="Login"/>
                                    <Input placeholder="Passwword" type="passwword"/>
                                    <Button>Submit</Button>
                                </Flexbox>
                            </Card>
                        </ThemeProvider>
                    </Flexbox>
                </Card>
            </ThemeProvider>
        </Flexbox>
    </Card>
</ThemeProvider>

#### Size

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



## Types

Theme strategy provided by <Badge>```<ThemeProvider/>```</Badge>
``` typescript
type ThemeStrategyType = 'dark' | 'light' | 'system';
```

Theme resolved by selected strategy
``` typescript
type ThemeSchemeType = 'dark' | 'light';
```

Theme context returned useThemeContext()
``` typescript
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