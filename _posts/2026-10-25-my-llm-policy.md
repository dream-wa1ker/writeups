---
title: "My LLM Usage Policy"
date: 2026-10-25
nav_id: blog
og_slug: "LLM Usage Policy"
prompt: cat llm-policy.md
bar_label: POLICY(1)
page_title: NAME
tagline: "how, why, and where I actually use AI - written down so I can hold myself to it"
description: >-
  A record of how I use large language models as a cybersecurity student: what I ask them for, what I refuse to let them do for me, and where I draw the line between learning and outsourcing.
tags: [ai, llm-policy, learning, cybersec]
---

<section markdown="1">

## Why This Exists
{: .section-label }

<div class="description" markdown="1">

I use AI every day. I also think AI is a threat, a tool, and a force multiplier, and which one it is depends entirely on context: who's using it, for what, and whether they can check the result without it. I wrote this down so my own answer to that question is explicit instead of implied.

Code is an ocean, and cybersecurity is a kind of warfare - whichever side you end up on. Neither of those gets smaller because a model can autocomplete syntax. This is the policy I hold myself to while I learn to swim in it.

</div>
</section>

<section markdown="1">

## Where I Actually Am
{: .section-label }

<div class="description" markdown="1">

I've thought about this as four kinds of people, ranked by one thing only: can you verify the output without the AI that produced it?

- someone who can prompt well but can't read the code it returns
- someone who can prompt and review, but the review itself leans on AI
- someone who can prompt and review independently, but still thinks faster in English than in code
- someone who can do all of it, with or without AI, where the only thing AI changes is speed

Right now I'm building fundamentals: structs, arrays, arrays of structs, `fread`/`fwrite`, and whatever my curiosity pulls in along the way - `evdev` and the input subsystem lately. I'm closer to the third kind than the fourth. I can usually read and argue with code I didn't write, but writing it from a blank page is still slower in C than it is in English. I don't think that gap closes by prompting more. It closes by writing more.

</div>
</section>

<section markdown="1">

## How I Use It
{: .section-label }

<div class="description" markdown="1">

**Books and source first, AI second.** I learn from books and from reading real code on GitHub before I ask a model anything. If I'm stuck on *why* something is written the way it is, that's when I bring it to AI - not before.

**No copy-paste ritual.** If AI writes something for me to look at, I don't paste it into my own project. I read it line by line, write what it does in my own words in an Obsidian note, and then write my own version - not identical, close enough to prove I understood it, different enough that it's actually mine.

**Ask the what-ifs.** Once I think I understand a piece of code, I ask AI the edge cases I wouldn't have thought to ask myself: what if this input is empty, what if this overflows, what if two threads hit this at once. That's where I learn the most, not from the first explanation.

**Thoughts to AI, not code to AI.** When I have an idea and want to get it in order, I type it to AI as a rough draft of my own thinking and ask it to refine the wording - not to invent the idea, and not to write the implementation. The thinking is mine before it goes in, and it's still mine after it comes out.

**Build while learning.** There's never been a better time to build, so I don't wait until I "know enough." I build small things to apply what I'm learning the same week I learn it, with AI explaining concepts, not shipping code.

</div>
</section>

<section markdown="1">

## What I Won't Outsource
{: .section-label }

<div class="description" markdown="1">

The exam room has no AI in it. Neither does a real incident, and neither does a job interview that actually tests you. So the fundamentals have to be mine regardless of what's available in the room - that's not optional, it's the actual job.

Anything I can't explain line by line, or couldn't rewrite from scratch without help, I don't consider mine yet. That's the test I use before I let something sit in a project and call it done.

</div>
</section>

<section markdown="1">

## Where I Draw the Line
{: .section-label }

<div class="description" markdown="1">

Curiosity-driven, offensive-adjacent projects - a keylogger over `evdev`, ARP spoofing on my own phone and my own network - are how I actually learn this field. I build them on hardware and networks I own, I understand every line, and they go no further than that.

That line doesn't move for AI either. I won't ask it, and wouldn't want it, to help make something like that stealthy, persistent, remote, or aimed at a device or a person that isn't mine and hasn't agreed to it. The same rule applies to the human version of the same question: learning the attack is not the same thing as running it on someone who didn't ask for it.

</div>
</section>

<section markdown="1">

## Revisiting This
{: .section-label }

<div class="description" markdown="1">

This is where I am as of October 2026, not a fixed position. I expect the fourth kind of person - the one where AI only changes speed - to take years, not months, and I expect this file to get rewritten more than once on the way there.

</div>
</section>
