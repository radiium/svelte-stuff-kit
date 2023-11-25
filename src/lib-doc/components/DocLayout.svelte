<script lang="ts">
</script>

<div class="wrapper">
	<header>
		<slot name="header" />
	</header>
	<aside>
		<slot name="aside" />
	</aside>
	<main>
		<slot name="main" />
	</main>
</div>

<style lang="scss">
	.wrapper {
		display: grid;
		grid-template-columns: 250px 1fr;
		grid-template-rows: 48px 1fr;
		gap: 0px 0px;
		grid-template-areas:
			'header header'
			'aside main';
		position: absolute;
		inset: 0 0 0 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-color: var(--background-level-0);
		color: var(--color);

		--header-height: 48px;
		--header-width: 100%;

		--aside-height: 100%;
		--aside-width: 250px;

		--main-height: 100%;
		--main-width: 100%;

		header,
		aside,
		main {
			border-style: solid;
			border-color: var(--border-color);
		}

		header {
			grid-area: header;
			height: var(--header-height);
			width: var(--header-width);
			border-style: solid;
			border-color: var(--border-color);
			border-width: 0 0 1px 0;
			background: var(--background-level-2);
			position: relative;
			overflow: visible;
		}

		aside {
			grid-area: aside;
			height: var(--aside-height);
			width: var(--aside-width);
			border-style: solid;
			border-color: var(--border-color);
			border-width: 0 1px 0 0;
			background: var(--background-level-1);
			position: relative;
			overflow: hidden;
		}

		main {
			grid-area: main;
			height: var(--main-height);
			width: var(--main-width);
			border-style: solid;
			border-color: var(--border-color);
			border-width: 0 0 0 0;
			background: var(--background-level-0);
			position: relative;
			overflow: hidden;
		}
	}

	:global(.panel-btn svg) {
		height: unset !important;
	}
</style>
