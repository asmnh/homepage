---
title: "Agent instructions tricks - Definition of Done"
description: "Getting AI agents to be less dumb when being scheduled work"
published: 2026-08-19
tags:
  - ai
draft: false
---

A trick that I learned doing some agentic coding is to have agent instructions ([agents.md](https://agents.md/) etc) contain a section - preferably by the end - as a checklist of what needs to be met to consider a task done. It doesn't replace hooks and other hard validation, but helps a lot in keeping harness tight.

DOD steps seem to work best when made declarative, and as a checklist. Example:

1. All unit tests and integration tests pass.
2. All architectural decisions are documented in `/docs/`.
3. Any new decisions have immutable record in `/docs/adr/`.
4. Everything is commited, commit history is clean and linear.
5. Ticket status and TODO tracking is up-to-date with changes.
6. Branch can be merged into `main` without conflicts, no rebase necessary.

Shorter is better, since this is a sequence model will likely run step by step each time it's "done" with the work - you can have separate "handoff" and "task completed" DOD and trigger second one explicitly by commanding model to wrap up the task.

Fun fact: you can also use AI to put harness on other devs and check their merge requests against provided definition of done, LLM can run same checks against someone elses code.
