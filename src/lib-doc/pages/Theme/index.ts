import { docThemeProviderProps } from '$lib/components/ThemeProvider/ThemeProvider.props';
import { packageName } from '../../../constants';
import type { DocPageData } from '../../types';
import ThemeSample from './ThemeSample.svelte';

export const docTheme: DocPageData = {
	id: 'theme',
	title: 'Theme',
	description: 'Theme wrapper',
	demoTitle: 'Examples',
	demoComponent: ThemeSample,
	props: docThemeProviderProps,
	slots: [
		{
			default: true
		}
	]
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
