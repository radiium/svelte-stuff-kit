<script lang="ts">
	import { Card } from '$lib';

	// let isCopied: boolean = false;
	// let timeoutId: NodeJS.Timeout;
	// const copyCode = () => {
	// 	if (isCopied) {
	// 		return;
	// 	}

	// 	navigator.clipboard
	// 		.writeText(code)
	// 		.then(() => {
	// 			isCopied = true;
	// 			clearTimeout(timeoutId);
	// 			timeoutId = setTimeout(() => {
	// 				isCopied = false;
	// 			}, 1800);
	// 		})
	// 		.catch((err) => {
	// 			console.error('Async: Could not copy text: ', err);
	// 		});
	// };
</script>

<Card>
	<pre><code><slot /></code></pre>
</Card>

<style lang="scss">
	code {
	}
</style>
