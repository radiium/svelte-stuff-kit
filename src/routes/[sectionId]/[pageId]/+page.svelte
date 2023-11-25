<script lang="ts">
	import type { PageData } from './$types';
	import DocPageContent from '../../../lib-doc/components/DocPageContent.svelte';

	export let data: PageData;
</script>

<DocPageContent section={data.section} page={data.page}></DocPageContent>
