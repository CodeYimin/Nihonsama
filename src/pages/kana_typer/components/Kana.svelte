<script lang="ts">
  import type { IKana } from "../../../utils/kana";

  export let kana: IKana;
  export let active: boolean;
  export let correct: boolean | undefined;

  $: color = correct === undefined ? undefined : correct ? "green" : "red";
</script>

<main class:active>
  <span id="roumaji" style:color>
    {@html active ? "?" : correct === undefined ? "&#8203;" : kana.roumaji}
  </span>
  <span id="content" style:color>
    {kana.kana}
  </span>
</main>

<style>
  main {
    padding: 0.2em 0.5em;
    display: inline-flex;
    position: relative;
    flex-direction: column;
  }

  #roumaji {
    text-align: center;
    font-size: 0.4em;
    font-weight: 300;
  }

  #content {
    font-size: 1em;
  }

  .active {
    background-color: rgb(244, 244, 244);
    border-radius: 0.1em;
  }
</style>
