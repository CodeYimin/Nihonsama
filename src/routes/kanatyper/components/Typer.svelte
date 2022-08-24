<script lang="ts">
	import ClickToFocus from '$lib/components/ClickToFocus.svelte';
	import { getRandomKana, type Kana } from '$lib/util/kana';
	import type { WithTarget } from '$lib/util/types';
	import { onMount } from 'svelte';
	import { tick } from 'svelte/internal';
	import TyperKana from './TyperKana.svelte';

	interface TyperKanaInfo extends Kana {
		id: number;
		correct?: boolean;
		element?: HTMLElement;
	}

	const numRows = 3;
	const kanaRowGap = '1em';

	let kanas: TyperKanaInfo[];
	let currentKanaIndex = 0;
	$: currentKana = kanas[currentKanaIndex];

	let displayedKanaStartIndex = 0;
	let kanaContainerHeight: string;

	$: currentKana && adjustDisplayedKana();

	function generateRandomKana() {
		kanas = getRandomKana(100, (kana) => kana.type === 'gojuuon').map((kana, i) => ({
			...kana,
			id: i
		}));
	}

	function handleFocus(event: CustomEvent<FocusEvent>) {
		currentKana.element?.focus();
	}

	function handleInternalFocus(event: CustomEvent<FocusEvent>) {
		if (currentKana.element && !currentKana.element.contains(event.detail.target as HTMLElement)) {
			currentKana.element.focus();
		}
	}

	async function handleRoumajiKeypress(event: CustomEvent<WithTarget<KeyboardEvent, HTMLElement>>) {
		const key = event.detail.key;
		const text = event.detail.currentTarget!.textContent!;
		if (key === ' ' || key === 'Enter') {
			event.detail.preventDefault();
			if (text === currentKana.roumaji) {
				currentKana.correct = true;
			} else {
				currentKana.correct = false;
			}

			currentKanaIndex++;
			kanas = kanas;
			await tick();

			currentKana.element?.focus();
		} else if (key !== 'Backspace' && text.length >= 3) {
			event.detail.preventDefault();
		}
	}

	function adjustDisplayedKana() {
		// const
	}

	onMount(() => {
		const kanaHeight = kanas[0].element!.getBoundingClientRect().height;

		kanaContainerHeight = `calc(${kanaHeight * numRows}px + ${(numRows - 1)} * ${kanaRowGap})`;
	});

	generateRandomKana();
</script>

<ClickToFocus on:focus={handleFocus} on:internalFocus={handleInternalFocus}>
	<div class="kana-container" style:height={kanaContainerHeight} style:row-gap={kanaRowGap}>
		{#each kanas as kana (kana.id)}
		<div class="kana">
			<TyperKana
				{kana}
				correct={kana.correct}
				bind:element={kanas[kana.id].element}
				active={kana === currentKana}
				on:roumajiKeypress={handleRoumajiKeypress}
			/>
		</div>
		{/each}
	</div>
</ClickToFocus>

<style lang="scss">
	.kana-container {
		display: flex;
		flex-wrap: wrap;
		overflow-y: hidden;
	}

	.kana {
		margin: 0 1em;
	}
</style>
