<script>
	import { Button } from '$lib';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import { packageHomePage } from '../../constants';
</script>

<Button mode="outline" size="2" iconOnly href={packageHomePage}>
	<GithubLogo weight="fill" />
</Button>
