---
title: "Guided learning with AI"
description: "Using AI as a guide for learning new concepts, technology, skills"
published: 2026-07-25
tags:
  - ai
draft: false
---

Like it or not, bubble or not, AI got big. I don't want to debate on that part much - everyone else does that plenty well. 
What I'd like to look at instead is how to get the most out of what we've got and how to make tensors work for their electricity bill.

Everything in this article is my own experiences mixed with impressions shared by others - there are no sources, maybe I made it all up, maybe not - site exists, commit history exists, so *something* came out of it. Treat it more like opinion piece.

## What are chatbots actually good at

Context. Really, it's that simple. Context of the chat, outside info they can pull into their answers, keeping track of what was or wasn't mentioned. 
If you treat AI as a self-managing notebook with library access, it can do quite a lot.

Take your tutorial of choice. Reduced to most basic structure, it is step-by-step instruction how to do something with explanations sprinkled in. 
Noninteractive - outside some code blocks to copy (for programming tutorials), sample files to download for progress or to compare what you did, 
maybe some links to get more info, check official docs or navigate to different sections. It's still something you could print and have it be 
almost as useful - back in my day we had those printed tutorials with CD having examples and tools, those were called "books".

AI chatbot can turn that into fully interactive process. Going through topic you're learning step by step, allowing for questions to current or 
previous part, corrections, helping you solve mistakes you find or supporting your own ideas that come up as you learn. It's not perfect - far from it - 
but any minor hallucinations it comes up with tend to be quickly spotted (what you're doing doesn't work) and corrected.

## Tutorial 2.0

This very page happened largely thanks to ChatGPT (current model as of what was available when article was published), and followed what ordinarily would be a tutorial format. My initial prompt was:

```text
I have a personal domain (.dev) that I'd like to get some cheap webhosting 
and maybe mailbox/email account. For hosting, static site will do fine 
as long as I can generate it using GitHub actions and upload to hosting 
provider automatically. For purposes, I'm thinking some sort of personal 
homepage/blog/tech journal kind - we're keeping ceremony to minimum and 
focusing purely on content. 10-ish years ago I'd probably go with 
wordpress or ghost if not for... well, we have standards in 2026.

...

What I'll need is:
* Suggest me hosting (or few options to choose from) that's either 
free or cheap to use, supports SSL (Let's Encrypt preferably, or 
own solution) and can at least serve static HTML/JS/CSS with 
navigation and "elegant" URLs.
* Suggest me content-to-site pipeline that can be easily set on 
GH actions and pulls content from GH repo it's set on. Repo will 
most likely end up public (since content is public, why not?). 
No requirements for input format, markdown or similar 
plaintext-adjacent is preferred, HTML snippets are okay, I'd 
rather not handwrite JSON files if possible, TeX *could* be fun, 
please no Word or Pages - those don't version well.
* If there's anything I didn't take into consideration or should 
think about - point it out. If whole idea is stupid and I'm 
approaching it from the wrong direction, tell me.
```

with GPT returning suggested structure, few back-and-forth messages to clarify my choices, followed by:

```text
Okay, let's move to step-by-step tutorial, you're cosplaying 
average youtuber doing a tutorial (just spare me the accent).

Step 1 is probably repository, let's set it up - I'll make 
empty public repo on github, empty local repo and add origin. 

What next?
```

### What happened here and why it worked

We start with scope. I had a goal for what I want to learn, but no specific knowledge about details/choices (no idea [Astro](https://astro.build/) existed, didn't know what CloudFlare supports). Scope doesn't need to be known ahead of time, it can be refined with some back-and-forth. Final decisions belong to Protein Bundle. 
Requesting AI to review your request (the `If whole idea is stupid` part) before you sink in time is valuable - AI tends to be helpful and always answer, so skipping this part can lead to some hallucinations when it tries to invent plausible answer over calling you out.

Next, after we have scope, is setting a roadmap/plan - this is what both you and AI will use to go through step-by-step. It doesn't need to be precise, as long as every step somehow connects to previous one (or few steps back). There are limitations to how much AI can "hold in cache" at a time, so large context and recalling some long forgotten lore - even from same chat - can have varying results. If you've got general idea what you're learning, review and correct context as needed, otherwise it's okay to rely on AI as long as you get fed sources to cross-check wrong information that **may** happen.

After that? Call for step 1, follow instructions, ask or question what you've got as you go, call next step when you're ready. It's worth giving AI feedback about what you did, and especially if you changed anything meaningful, so it can adjust on the fly - and if you asked questions or wanted to try out few options, a summary before moving forward should correct any assumptions model might've taken during this exploration stint.

Important: do not just blindly copy what AI gives you, at the very least read it properly, preferably look through it and adjust for what you'd want. If you just copy everything with zero attention, you're giving up on main advantage of this type of learning over well-edited sources - interactivity. You have best tool possible to avoid tutorial hell, don't go there, or Save the Planet and just watch youtube version instead.

Clarifying questions and assumptions carry this process - you can have model cross-check your understanding as you go, deep-dive into related tangent if you find it interesting or important, or ask it to skip anything you want to get a solution for rather than explanation - sometimes you don't want to learn everything adjacent, and just focus on core part. Either is fine, and this is arguably best use of interactivity feature.

Expected final result is not really what you've got, but - mainly - you understanding the process and reason behind all steps. Following precise instructions is not 
very hard (*citation needed*) - even AI can do it - understanding concepts behind instructions and being able to selectively use them as needed is what tutorials are for. You're aiming for getting enough understanding that you'd be able to apply similar process in future (maybe with some documentation help) and adjust it as you see fit, rather than following the ritual.

## Explorative teaching

"Classic" teaching process (mainly self-teaching, but let's not discount lectures) is very explanatory - there is a Source of Truth that emits information, your brain registers that information, places it neatly organized in long term memory (or not, your grades are your problem), and that's really it. Anything outside what you're learning from? Go look it up, maybe there's index, bibliography or citations you can follow.

To make it perfectly clear: I am not criticizing explanatory teaching style here - it has its uses, it works, it's still popular and widely accessible - nearest library is good starting point (just steer away from fiction) if you want to try it out, I highly recommend it, try "The Case for Mars" for some lighter read that's fun to rehash with modern knowledge. 

Different approach AI enables is what you'd normally do with mentor or colleague when learning something new - exploratory teaching. Simply put: find a hook (look it up, ask for one, drop a question), get pack of information and... go from there. Nothing more, all you have to do is ask questions, make assumptions (that can - and will - be corrected), request deeper explanation, navigate subject space however you see fit. Context helps here to not have same info rehashed over and over, source links are one question away, you can either summarize yourself (and get graded on it) or ask for summary.

What makes AI especially nice for this style of learning is infinite patience ~~within token allowance~~. Unlike daring to bother another human, you can go as long or as deep as you'd like, ask very stupid or basic questions, throw out completely wrong conclusions and get them corrected, repeat something you forgot you asked an hour ago. Infinite patience is a gamechanger.

Now, I would not rely on AI models for in-depth knowledge - risk of hallucinations or just getting things slightly wrong exists, and misinformation can be worse than no information. But for introduction to a topic or general overview, available models are more than good enough - so if there's something new you'd want to learn about, it is about as good as it gets.

To give an example, I got randomly curious about "smart animals" and few examples and some surface-level exploring in topic shifted into "everything cuttlefish". Given I went into this area with very limited initial knowledge (I knew dolphins), ended up spending more time than I'd like to admit admiring collective research about Baby Cthulhu, guided to relevant materials by chat with model, and bouncing off my impressions and understanding to rehash them. Needless to say, *Cuddlefish* term was coined and I now have my favourite animal I know a little too much about.

---

*Entire article was written by a human, despite how much my writing style may resemble LLMs.*
