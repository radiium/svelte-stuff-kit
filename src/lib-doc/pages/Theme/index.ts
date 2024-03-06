import { docThemeProviderPropsDefs } from '$lib/components/ThemeProvider/ThemeProvider.props';
import { packageName } from '../../../constants';
import type { DocPage } from '../../types';
import ThemeSample from './ThemeSample.svelte';

export const docTheme: DocPage = {
	id: 'theme',
	title: 'Theme',
	description: 'Theme wrapper',
	demoTitle: 'Examples',
	demoComponent: ThemeSample,
	sections: [docThemeProviderPropsDefs]
};

export const sampleNestedTheme = `<script lang="ts">
    import { ThemeProvider, ThemeSelect, Card, Flexbox } from '${packageName}';
</script>

<ThemeProvider slot="demo" strategy="light">
        <Card>
            <Flexbox gap="3" alignItems="center" class="mb-3">
                hello world
                <ThemeSelect />
            </Flexbox>

            <ThemeProvider strategy="dark">
                <Card>
                    <Flexbox gap="3" alignItems="center" class="mb-3">
                        hello world nested 1
                        <ThemeSelect />
                    </Flexbox>

                    <ThemeProvider strategy="light">
                        <Card>
                            <Flexbox gap="3" alignItems="center" class="mb-3">
                                hello world nested 2
                                <ThemeSelect />
                            </Flexbox>
                        </Card>
                    </ThemeProvider>
                </Card>
            </ThemeProvider>
        </Card>
    </ThemeProvider>`;
