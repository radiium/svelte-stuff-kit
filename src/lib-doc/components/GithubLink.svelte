<script>
	import { Button } from '$lib/index';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import { packageHomePage } from '../../constants';
</script>

<Button variant="outline" size="2" iconOnly href={packageHomePage}>
	<GithubLogo weight="fill" />
</Button>
