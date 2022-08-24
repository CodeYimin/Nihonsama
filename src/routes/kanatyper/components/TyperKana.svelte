<script lang="ts">
	import type { Kana } from '$lib/util/kana';
	import type { WithTarget } from '$lib/util/types';
	import { createEventDispatcher } from 'svelte/internal';

	export let element: HTMLElement | undefined = undefined;
	export let kana: Kana;
	export let active: boolean = false;
	export let correct: boolean | undefined;

	const dispatch = createEventDispatcher<{
		roumajiKeypress: WithTarget<KeyboardEvent, HTMLElement>;
	}>();

	let roumajiElement: HTMLElement | undefined = undefined;
	$: color = correct === undefined ? '' : correct ? 'green' : 'red';

	function handleFocusIn(event: FocusEvent) {
		roumajiElement?.focus();
	}

	function handleRoumajiKeypress(event: WithTarget<KeyboardEvent, HTMLElement>) {
		dispatch('roumajiKeypress', event);
	}
</script>

<main bind:this={element} on:focusin={handleFocusIn} tabindex="-1">
	<span
		class="roumaji"
		contenteditable={active}
		bind:this={roumajiElement}
		on:keypress={handleRoumajiKeypress}
		style:color
	>
		{@html active ? '' : correct === undefined ? '<wbr>' : kana.roumaji}
	</span>
	<span class="kana" style:color>{kana.kana}</span>
</main>

<style lang="scss">
  * {
    transition: all 0.3s ease-in-out;
  }

	main {
		display: flex;
		flex-direction: column;
    align-items: center;
		pointer-events: none;
	}

	.roumaji {
		outline: none;
    text-align: center;
	}

  .kana {
    font-size: 2em;
  }
</style>
