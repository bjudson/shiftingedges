
import fs from 'fs';
import path from 'path';
import { parse } from 'svelte/compiler';

const MAX_LOOP_LENGTH = 3;
const POEM_DIR = path.join('src', 'routes', 'poems');

// find all potential poem svelte files
function crawlDirectory(dirPath, paths = []) {
  const items = fs.readdirSync(dirPath);
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    if (fs.statSync(fullPath).isDirectory()) {
      crawlDirectory(fullPath, paths);
    } else if (item === '+page.svelte') {
      paths.push(fullPath);
    }
  });
  return paths;
}

// find all Link components in a poem file, and return the href and text 
// as well as the poem it from which it came
function findLinks(node, poemName, links = []) {
  if (node.type === 'InlineComponent' && node.name === 'Link') {
    const hrefAttr = node.attributes.find(attr => attr.name === 'href');
    const text = node.children.find(child => child.type === 'Text');
    if (hrefAttr && text) {
      links.push({
        poem: poemName,
        text: text.data,
        href: hrefAttr.value[0].data,
      });
    }
  }
  if (node.children) {
    node.children.forEach(child => findLinks(child, poemName, links));
  }
  return links;
}

// extract the link data from a poem file
function extractLinkData(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const parsed = parse(content);
  const pathParts = filePath.split('/');
  const poemName = pathParts[pathParts.length - 2];
  return findLinks(parsed.html, poemName);
}

// get all the links from all the poems in the project
function getPoemLinks() {
  let links = [];
  const paths = crawlDirectory(POEM_DIR);
  paths.forEach((path) => {
    links = [...links, ...extractLinkData(path)];
  });
  return links;
}

// given a list of links with poemName as the source, and href as the name of the target, 
// return a list of all the cases where following the links sends you back to the starting poem
function analyzePoemLoops(links, upperLimit = MAX_LOOP_LENGTH) {
  const paths = links.map(link => [link]);
  const loops = [];
  while (paths.length > 0) {
    const currentPath = paths.pop();
    const currentPoem = currentPath[currentPath.length - 1].href;
    const nextLinks = links.filter(link => link.poem === currentPoem);
    nextLinks.forEach(link => {
      if (currentPath.length > 1 && link.href === currentPath[0].poem) {
        loops.push([...currentPath, link]);
      } else if (currentPath.length < upperLimit - 1) {
        paths.push([...currentPath, link]);
      }
    });
  }
  return loops;
}

function printLoops(loops) {
  loops.sort((a, b) => a.length - b.length);
  loops.forEach(loop => {
    const names = loop.map(link => link.poem).join(' -> ')
    console.log(`${loop.length} click loop: ${names}`);
    console.log('---')
  });
}

function getPoemsByIncomingLinkCount(links) {
  const incomingLinks = {};
  links.forEach(link => {
    if (!incomingLinks[link.href]) {
      incomingLinks[link.href] = [];
    }
    incomingLinks[link.href].push(link.poem);
  });
  return Object.entries(incomingLinks).sort((a, b) => b[1].length - a[1].length);;
}

function printPoemsByIncomingLinkCount(byIncomingLinks) {
  byIncomingLinks.forEach(([poem, incomingLinks]) => {
    console.log(`${poem} has ${incomingLinks.length} incoming links:`);
    incomingLinks.forEach(link => {
      console.log(`  - ${link}`);
    });
    console.log('---');
  });
}

function main() {
  const links = getPoemLinks();
  const loops = analyzePoemLoops(links);
  console.info(`** Found ${loops.length} loops: **`);
  printLoops(loops);

  const byIncomingLinks = getPoemsByIncomingLinkCount(links);
  console.info(`** Poems by incoming link count: **`);
  printPoemsByIncomingLinkCount(byIncomingLinks);
}

main();
