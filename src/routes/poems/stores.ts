import { writable } from "svelte/store";

export const showLinks = writable(false);

const initialLinks: { href: string; text: string }[] = [];

export const linksClicked = writable(initialLinks);
