<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  const poems = [
    "a-bird-was-given-the-heart",
    "after-all-the-river-could-swallow-us",
    "because-of-the-eye-the-hand-fell",
    "fire-leaves-its-soul-where-it-steps",
    "i-dreamed-that",
    "long-strands-of-light",
    "scratching-the-moon-into-earth",
    "the-bird-slowly-grew-a-fear",
    "the-light-does-not-know",
    "the-weight-of-your-eyelids",
    "when-there-is-space-we-will-meet",
    "your-breath-has-buried",
  ];

  onMount(() => {
    const poem = poems[Math.floor(Math.random() * poems.length)];
    goto(`/poems/${poem}`, { replaceState: true });
  });
</script>
