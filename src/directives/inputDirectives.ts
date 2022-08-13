import type { Action } from "svelte/types/runtime/action";

export const keepFocus: Action = (node) => {
  node.focus();

  function blurListener() {
    node.focus();
  }

  node.addEventListener("blur", blurListener);

  return {
    destroy() {
      node.removeEventListener("blur", blurListener);
    }
  }
};
