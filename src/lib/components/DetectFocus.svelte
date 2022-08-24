<script lang="ts">
	import { createEventDispatcher } from 'svelte/internal';

	export let focused: boolean = false;

	const dispatch = createEventDispatcher<{
		internalFocus: FocusEvent;
		internalBlur: FocusEvent;
		focus: FocusEvent;
		blur: FocusEvent;
	}>();

	let container: HTMLElement;

	function handleFocusIn(event: FocusEvent) {
		if (focused) {
			dispatch('internalFocus', event);
		} else {
			focused = true;
			dispatch('focus', event);
		}
	}

	function handleFocusOut(event: FocusEvent) {
		if (container.contains(event.relatedTarget as HTMLElement | null)) {
			dispatch('internalBlur', event);
		} else {
			focused = false;
			dispatch('blur', event);
		}
	}
</script>

<span bind:this={container} on:focusin={handleFocusIn} on:focusout={handleFocusOut}>
	<slot />
</span>
