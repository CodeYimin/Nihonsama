<script lang="ts">
	import DetectFocus from '$lib/components/DetectFocus.svelte';

	export let focused: boolean = false;
</script>

<DetectFocus bind:focused on:internalBlur on:internalFocus on:focus on:blur>
	<main tabIndex="-1">
		<div class:blur={!focused}>
			<slot />
		</div>
		<div style:display={focused ? 'none' : ''} class="focus-request">
			<p>Click to focus</p>
		</div>
	</main>
</DetectFocus>

<style lang="scss">
	* {
		transition: 0.3s ease-in-out all;
	}

	main {
		position: relative;
	}

	.focus-request {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		/* border: 1px solid black; */
		border-radius: 0.5em;
		cursor: default;
	}

	.blur {
		filter: blur(5px);
	}
</style>
