<script lang="ts">
	import { Flexbox } from '$lib/index';

	const sampleText = 'Lorem ipsum dolor...';

	let name = 'abc <\/script>';
</script>

<Flexbox direction="column" gap="3">
	<h1>&lt;h1&gt; heading</h1>
	<h2>&lt;h2&gt; heading</h2>
	<h3>&lt;h3&gt; heading</h3>
	<h4>&lt;h4&gt; heading</h4>
	<h5>&lt;h5&gt; heading</h5>
	<h6>&lt;h6&gt; heading</h6>
	<p>&lt;p&gt; {sampleText}</p>
	<blockquote>&lt;blockquote&gt; {sampleText}</blockquote>
	<small>&lt;small&gt; {sampleText}</small>
	<b>&lt;b&gt; {sampleText}</b>
	<i>&lt;i&gt; {sampleText}</i>
	<u>&lt;u&gt; {sampleText}</u>
	<a id="link" href="#link">&lt;a&gt; link</a>
</Flexbox>
