---
title: Building this website
date: 2026-10-15
summary: How the wave at the bottom of this site came together.
---

I wanted my website to feel a little more alive than a plain list of links, so I gave it a wave.

## The idea

The look comes from a 2D wave animation I liked: flat teal water, pale foam, and thin dark-blue lines along the edges. When you scroll down the home page, the water rises and the rest of the page sits on top of it. When you open a post like this one, the water washes over the screen and drains away.

## How it works

The wave is drawn live in SVG. Each layer is made of many overlapping circles and ellipses, and a "goo" filter blurs them and then sharpens the edges again, so the shapes melt into one soft, blobby surface. Two slow swells crossing each other make the surface rise and fall in place, and the foam rolls in small loops the way things bob on real water.

The site is built with [Astro](https://astro.build) and hosted on GitHub Pages.

## What's next

I'll use this space for notes on things I'm learning and building.
