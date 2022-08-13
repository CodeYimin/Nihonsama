<script lang="ts">
  import App from "../../App.svelte";
import { getRandomHiragana, type IKana } from "../../utils/kana";
  import type { EventWithTarget } from "../../utils/types";
  import Kana from "./components/Kana.svelte";

  type KanaInfo = IKana & { correct?: boolean, id: number };

  let kanaInfos: KanaInfo[];
  let startingKanaIndex: number;
  let currentKanaIndex: number;
  $: currentKana = kanaInfos[currentKanaIndex];

  let kanaElementsContainer: HTMLDivElement | undefined;

  $: currentKanaIndex && adjustDisplayedKanas();

  function resetKanas() {
    kanaInfos = getRandomHiragana(50).map((kana, i) => ({...kana, id: i}));
    currentKanaIndex = 0;
    startingKanaIndex = 0;
  }

  function adjustDisplayedKanas() {
    if (!kanaElementsContainer) {
      return;
    }

    const containerTop = kanaElementsContainer.getBoundingClientRect().top;
    const containerLeft = kanaElementsContainer.getBoundingClientRect().left;

    const kanaElements = [...kanaElementsContainer.children];

    const thirdRowIndex = kanaElements.findIndex((e) => {
      if (!e) {
        return;
      }

      const eBounds = e.getBoundingClientRect();
      return (
        eBounds.left === containerLeft &&
        (eBounds.top - containerTop) / eBounds.height === 2
      );
    });

    if (currentKanaIndex - startingKanaIndex < thirdRowIndex) {
      return;
    }

    const secondRowIndex = kanaElements.findIndex((e) => {
      if (!e) {
        return;
      }

      const eBounds = e.getBoundingClientRect();
      return (
        eBounds.left === containerLeft &&
        (eBounds.top - containerTop) / eBounds.height === 1
      );
    });

    startingKanaIndex += secondRowIndex;
  }

  function handleRoumajiKeypress(
    event: EventWithTarget<HTMLSpanElement, KeyboardEvent>
  ) {
    const prevInput = event.currentTarget.textContent;
    const key = event.key;

    if (key === " " || key === "Enter") {
      // Prevent enter key from creating a line break
      event.preventDefault();

      // Check answer
      currentKana.correct = prevInput === currentKana.roumaji;
      kanaInfos = kanaInfos;

      // Go to next kana
      currentKanaIndex++;
    } else if (prevInput && prevInput.length >= 3) {
      event.preventDefault();
    }
  }

  resetKanas();
</script>

<main>
  <h1>Kana Typer</h1>
  <div
    class="words"
    style:height={kanaElementsContainer ? `${[...kanaElementsContainer.children].at(0)?.getBoundingClientRect().height * 3}px` : ''}
    bind:this={kanaElementsContainer}
  >
    {#each kanaInfos.slice(startingKanaIndex) as kana, i (kana.id)}
      <Kana
        {kana}
        active={kana === currentKana}
        correct={kana.correct}
        onKeypress={handleRoumajiKeypress}
      />
    {/each}
  </div>
</main>

<style>
  main {
    text-align: center;
  }

  h1 {
    font-size: 3em;
    font-weight: 500;
  }

  .words {
    font-size: 2em;
    margin: 2em auto;
    text-align: left;
    width: 75%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
  }
</style>
