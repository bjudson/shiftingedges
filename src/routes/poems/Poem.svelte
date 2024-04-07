<script>
  import { showLinks } from "./stores";

  function handleEnter() {
    showLinks.set(true);
  }

  function handleLeave() {
    showLinks.set(false);
  }
</script>

<section
  on:mouseenter={handleEnter}
  on:mouseleave={handleLeave}
  on:focus={handleEnter}
  on:blur={handleLeave}
  role="tablist"
  tabindex="0"
>
  <div>
    <slot />
  </div>
</section>

<style>
  section {
    font-family: "Alegreya", serif;
    font-size: 1.15rem;
    line-height: 1.85rem;
    width: 100%;
    max-width: 700px;
    aspect-ratio: 1 / 1;
    padding: 3rem;
    background-color: #dcdfe4;
    border: 1px solid #dcdfe4;

    &:focus {
      outline: none;
      border: 1px solid #c7ccd6;
    }

    @media (max-width: 768px) {
      padding: 2rem;
      aspect-ratio: 1 / 1.5;
    }

    @media (prefers-color-scheme: dark) {
      background-color: #353c3e;
      border: 1px solid #353c3e;

      &:focus {
        border: 1px solid #41494c;
      }
    }
  }
</style>
