<script lang="ts">
  import { keepFocus } from "../../directives/inputDirectives";
  import { getRandomHiragana, type IKana } from "../../utils/kana";
  import Kana from "./components/Kana.svelte";

  type KanaStruct = IKana & { correct?: boolean };

  let kanas: KanaStruct[];
  let currentKanaIndex: number;
  $: currentKana = kanas[currentKanaIndex];

  let input: string;

  function resetKanas() {
    kanas = getRandomHiragana(50);
    currentKanaIndex = 0;
  }

  function handleInput() {
    if (input.endsWith(" ")) {
      // Check answer
      currentKana.correct = input.slice(0, -1) === currentKana.roumaji;
      kanas = kanas;

      // Reset input and go to next word
      input = "";
      currentKanaIndex++;
    }
  }

  resetKanas();
</script>

<main>
  <h1>Kana Typer</h1>
  <div id="words">
    {#each kanas as kana, i}
      <Kana {kana} active={kana === currentKana} correct={kana.correct} />
    {/each}
  </div>
  <input
    type="text"
    use:keepFocus
    bind:value={input}
    on:input={handleInput}
  />
</main>

<style>
  main {
    text-align: center;
  }

  h1 {
    font-size: 3em;
    font-weight: 500;
  }

  #words {
    font-size: 2em;
    margin: 2em auto;
    text-align: left;
    width: 50%;
  }

  input {
    text-align: center;
    font-size: 2.5em;
    border: none;
    outline: none;
  }
</style>
