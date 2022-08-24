<script>
	import Typer from './components/Typer.svelte';
</script>

<main>
	<h1>Kana Typer</h1>

	<div class="typer-container">
		<Typer />
	</div>
</main>

<style lang="scss">
	main {
		text-align: center;
		margin: auto;
	}

	h1 {
		font-size: xx-large;
	}

	.typer-container {
		width: 75%;
		margin: auto;
	}
</style>
