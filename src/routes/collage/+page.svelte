<script lang="ts">
  import CollageMeta from "./CollageMeta.svelte";

  const title = "hypertext collage";
  const description =
    "may hide another, contain life, content warning, into the rubble, concepts of time, the story or the truth...";
</script>

<CollageMeta {title} {description} />

<h1>hypertext collage</h1>

<style>
  h1 {
    width: 100%;
    max-width: 600px;
    text-align: left;
    font-size: 24px;
    line-height: 36px;
    margin: 0 0 24px 0;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 16px;
      line-height: 24px;
    }
  }
</style>
