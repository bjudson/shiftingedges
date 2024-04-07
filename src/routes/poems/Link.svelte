<script>
  import { showLinks, linksClicked } from "./stores";
  export let href = "#";
  const text = "";

  function handleClick(e) {
    const text = e.target.textContent;
    linksClicked.update((prev) => [...prev, { href, text }]);
  }
</script>

<a
  {href}
  class={$showLinks ? "visible" : ""}
  on:click={handleClick}
  role="tab"
  tabindex="0"><slot /></a
>

<style>
  a {
    color: inherit;
    text-decoration: none;
    transition: background-color 1s;

    &:focus,
    &:hover {
      outline: none;
      background-color: rgb(180, 180, 221);
    }

    &.visible {
      background-color: rgb(206, 206, 231);

      &:focus,
      &:hover {
        outline: none;
        background-color: rgb(180, 180, 221);
      }
    }

    @media (prefers-color-scheme: dark) {
      &:focus,
      &:hover {
        outline: none;
        background-color: rgb(99, 116, 121);
      }

      &.visible {
        background-color: rgb(81, 97, 99);

        &:focus,
        &:hover {
          outline: none;
          background-color: rgb(99, 116, 121);
        }
      }
    }
  }
</style>
