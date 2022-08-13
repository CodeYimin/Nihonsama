<script lang="ts">
  import { keepFocus } from "../../../directives/inputDirectives";

  import type { IKana } from "../../../utils/kana";
  import type { EventHandler } from "../../../utils/types";
  
  export let main: HTMLElement | undefined = undefined;

  export let kana: IKana;
  export let active: boolean;
  export let correct: boolean | undefined;
  export let onKeypress: EventHandler<HTMLSpanElement, KeyboardEvent>;
  
  export let clientHeight: number | undefined = undefined;
  export let top: number | undefined = undefined;
  let color: string;
  
  $: clientHeight = main?.getBoundingClientRect().height;
  $: top = main?.getBoundingClientRect().top;
  $: color = correct === undefined ? '#333333' : correct ? "green" : "red";

  $: console.log(active)
</script>

<main class:active bind:this={main}>
  {#if active}
    <span
      class="roumaji"
      contenteditable
      use:keepFocus
      on:keypress={onKeypress}
    />
  {:else}
    <span class="roumaji" style:color>
      {@html correct === undefined ? "&#8203;" : kana.roumaji}
    </span>
  {/if}
  <span class="content" style:color>
    {kana.kana}
  </span>
</main>

<style lang="scss">
  main {
    padding: 0.2em 0.5em;
    display: inline-flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .roumaji {
    outline: 0;
    font-size: 0.6em;
    font-weight: 300;
  }

  .content {
    font-size: 1em;
    padding: 0 0.2em;
  }

  main, main * {
    transition: all ease-in-out 0.15s;
  }

  .active {
    background-color: rgb(244, 244, 244);
    border-radius: 0.2em;
  }
</style>
