<script lang="ts">
	import { packageHomePage } from '../../../constants';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
	const code = `npm install ${packageHomePage}`;
	// const code = `npm install ${packageName}`;
</script>

<DocBlocCode {code} />
