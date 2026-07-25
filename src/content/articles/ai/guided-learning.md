---
title: "Guided learning with AI"
description: "Turning static tutorials into interactive, AI-guided learning"
published: 2026-07-25
tags:
  - ai
draft: false
---

Like it or not, bubble or not, AI got big. I don't want to debate that part much - everyone else does that plenty well. 
What I'd like to look at instead is how to get the most out of what we've got and how to make tensors work off their electricity bill.

Everything in this article is my own experiences mixed with impressions shared by others - maybe I made it all up, maybe not - site exists, commit history exists, so *something* came out of it. Treat it more like an opinion piece.

## What are chatbots actually good at

They're interactive to an absurd degree - which is a complete game changer in any sort of self-learning. You get context that keeps tracking conversation and learning process (with some well-known issues, LLMs tend to have not the best working memory), and ability to freely navigate the topic you're interested in, at your own pace and depth of choice.

Take your tutorial of choice. Reduced to its most basic structure, it is a set of step-by-step instructions how to do something with explanations sprinkled in. 
Noninteractive - outside some code blocks to copy (for programming tutorials), sample files to download for progress or to compare what you did, 
maybe some links to get more info, check official docs or navigate to different sections. It's still something you could print and have it be 
almost as useful - back in my day we had printed tutorials with CD having examples and tools, those were called "books".

An AI chatbot can turn that into fully interactive process. Going through topic you're learning step by step, allowing questions about the current or 
previous steps, corrections, helping you solve mistakes you find or supporting your own ideas that come up as you learn. It's not perfect - far from it - 
but any minor hallucinations it comes up with should be quite easy to correct by either contradiction, error (for technical tutorials) or cross-checking with actual sources. Still, you want to watch out for wrongs and ideally do a quick sanity check against established information later, when you have decent idea what to look for.

## Tutorial 2.0

This very page happened largely thanks to ChatGPT (current model as of what was available when article was published), and followed what would ordinarily have been a tutorial format. My initial prompt was:

```text
I have a personal domain (.dev) that I'd like to get some cheap webhosting 
and maybe mailbox/email account. For hosting, static site will do fine 
as long as I can generate it using GitHub Actions and upload to hosting 
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

GPT returned a suggested structure. A few back-and-forth messages clarified my choices, followed by:

```text
Okay, let's move to step-by-step tutorial, you're cosplaying 
average youtuber doing a tutorial.

Step 1 is probably repository, let's set it up - I'll make 
empty public repo on github, empty local repo and add origin. 

What next?
```

### What happened here and why it worked

We start with scope. I had a goal for what I want to learn, but no specific knowledge of tools or design choices available (no idea [Astro](https://astro.build/) existed, didn't know what Cloudflare supports). Scope doesn't need to be known ahead of time, it can be refined with some back-and-forth. Final decisions belong to Protein Bundle. 
Requesting AI to review your request (the `If whole idea is stupid` part) before you sink time into it is valuable - AI tends to be agreeable and to produce an answer, so skipping this part can lead to some hallucinations when it tries to invent plausible answer rather than call you out on asking invalid question.

Next, after we have scope, is setting a roadmap/plan - this is what both you and AI will use to go through step-by-step. It doesn't need to be precise, as long as every step somehow connects to previous one (or to a clearly identified earlier step). There are limitations to how much AI can "hold in cache" at a time, so large context and recalling some long forgotten lore - even from same chat - can have varying results. If you've got a general idea what you're learning, review and correct context as needed, otherwise it's okay to rely on AI as long as you get fed sources with which to cross-check potentially wrong information.

After that? Ask for step one, follow instructions, ask questions about what you've been given as you go, call next step when you're ready. It's worth giving AI feedback about what you did, and especially if you changed anything meaningful, so it can adjust on the fly - and if you asked questions or wanted to try out a few options, a summary before moving forward should correct any assumptions model might've made during this exploration stint.

Important: do not just blindly copy what AI gives you, at the very least read it properly, preferably look through it and adjust for what you'd want. If you just copy everything with zero attention, you're giving up on the main advantage of this type of learning over well-edited sources - interactivity. You have the best easily available tool to avoid tutorial hell, don't go there, or Save the Planet and just watch YouTube version instead.

Clarifying questions and assumptions carry this process - you can have model cross-check your understanding as you go, take a deep dive into a related tangent if you find it interesting or important, or ask it to skip anything you want to get a solution for rather than explanation - sometimes you don't want to learn everything adjacent, and just focus on the core subject. Either is fine, and this is arguably best use of that interactivity.

Expected final result is not really what you have made, but - mainly - your understanding of the process and reason behind all steps leading to final result. Following precise instructions is not very hard (*citation needed*) - even AI can do it - understanding concepts behind instructions and being able to selectively use them as needed is what tutorials are for. You're aiming to understand enough that you'd be able to apply similar process in the future (maybe with some documentation help) and adjust it as you see fit, rather than following the ritual.

## Exploratory learning

Similar approach can apply for non-skill-based learning, general knowledge gathering or research.

Static learning process (mainly self-learning, but let's not discount lectures) is very **explanatory** - there is a Source of Truth that emits information, your brain registers that information, fits it neatly in long-term memory (or not, your grades are your problem), and that's really it. Anything outside what you're learning from? Go look it up, maybe there's index, bibliography or citations you can follow.

To make it perfectly clear: I am not criticizing explanatory learning style here - it has its uses, it works, it's still popular and widely accessible - nearest library is a good starting point (just steer away from fiction) if you want to try it out, I highly recommend it; try "The Case for Mars" for a lighter read that's fun to rehash with modern knowledge. 

A different approach that AI supports is similar to what you might do with mentor or colleague when approaching new subject - exploratory teaching. Simply put: find a hook (look it up, ask for one, drop a question), get a packet of information and... go from there. Nothing more, all you have to do is ask questions, make assumptions (that can - and will - be corrected), request deeper explanation, navigate subject space however you see fit. Context helps here avoid having same info rehashed over and over, source links are usually available on demand, you can either summarize yourself (and get graded on it) or ask for a summary.

What makes AI especially nice for this style of learning is infinite patience ~~within token allowance~~. Unlike daring to bother another human, you can go as long or as deep as you'd like, ask very stupid or basic questions, throw out completely wrong conclusions and get them corrected, repeat something you forgot you asked an hour ago. Infinite patience is a game changer.

Now, I would not rely on AI models for in-depth knowledge - the risk of hallucinations, or just getting things slightly wrong, remains - and misinformation can be worse than no information. But for an introduction to a topic or general overview, available models are working surprisingly well - so if there's something new you'd want to learn about, it is about as good as it gets.

To give an example, I got randomly curious about "smart animals" and few examples and some surface-level exploration soon turned into "everything cuttlefish". Since I entered the subject with very limited initial knowledge (I knew dolphins), ended up spending more time than I'd like to admit admiring the accumulated research about Baby Cthulhu, guided towards relevant materials by conversation with the model, using interactive loop to check my understanding and general impressions. Needless to say, the term *Cuddlefish* was coined and I now have my favourite animal I know a little too much about.

## Information ping-pong

Both examples share one common theme - learning this way is not passive, but instead centers around back-and-forth exchange with one side (AI model) providing information feed and cross-checking current understanding, while human actively engages with the content. Beautiful part about it is: exact process doesn't matter too much, as long as this two-way exchange is maintained. This can make learning look similar to gradual approximation method - especially for something that's harder to grasp, being able to get it wrong, get corrected, then repeat helps a lot when getting through more difficult topics (think abstract math).

Overall process follows:

1. Define what you're learning (together, you start).
2. Define how you're learning it (together, AI may have opinions and they may sometimes not be wrong).
3. Establish actual content or scope if relevant (mostly for tutorials).
4. Ask AI to introduce you to the topic.
5. Digest answer, do what you find appropriate, reply with questions, doubts or anything else you find relevant.
6. Proceed to next step from the plan.
7. Repeat until done or tokens ran out.

Relying on static learning resources is perfectly fine and sometimes preferable (as long as source material is good), AI models are a nice addition to it rather than full-on replacement. Using AI while not fully exploiting interactivity is mostly pointless - you end up getting worse, possibly slightly wrong, article or tutorial and you'd be better served with YouTube or whatever your search engine of choice spits at you for what you're looking for.

---

*Entire article was written by a human, despite how much my writing style may resemble LLMs.*

*Grammar, spelling and assorted nitpicks were pointed out by ChatGPT - see commit history for evidence of what AI made me do.*
