---
title: "Building Systems That Last"
date: 2025-01-15
topic: systems
tags: ["engineering", "architecture", "software"]
description: "What I've learned about creating robust systems from years of building software—and watching others break."
pinned: true
draft: false
---

When I started writing software, I thought the hard part was making things work. It took me years to realize the harder part is making things *keep* working—through changing requirements, growing teams, and the inevitable entropy of codebases.

This essay is about what I've learned building systems that survive contact with reality.

## The First Principle: Simplicity is a Feature

Every line of code is a liability. Every abstraction is a decision someone will need to understand later. Every feature is something that can break.

I've seen projects collapse under their own complexity. Not because the engineers were incompetent—often the opposite. Clever engineers write clever code. Clever code is hard to maintain.

The best systems I've worked on share a common trait: they're boring. They use well-understood patterns. They avoid unnecessary abstraction. They do one thing and do it well.

> "Simplicity is prerequisite for reliability." — Edsger Dijkstra

## Design for Change, Not for Perfection

Requirements change. Always. If you build a system assuming the requirements are fixed, you're building a system that will need to be replaced.

This doesn't mean over-engineering for every possible future. That's its own trap. It means:

- **Clear boundaries** between components
- **Explicit interfaces** that can evolve
- **Data structures** that accommodate extension
- **Tests** that verify behavior, not implementation

The goal isn't to predict the future. It's to build something that won't fight you when the future arrives.

## Failure is the Normal Case

Systems don't fail gracefully by accident. You have to design for failure explicitly.

This means:

1. **Assume every external call will fail** — network issues, timeouts, unexpected responses
2. **Plan for partial failures** — what happens when one service is down but others are up?
3. **Make failure visible** — monitoring, alerting, clear error messages
4. **Practice recovery** — if you've never restored from backup, you don't have backups

The systems I trust most are the ones where the team has thought deeply about what happens when things go wrong.

## The Human Element

Technical excellence isn't enough. Systems are built and maintained by people. Those people need to understand what they're working with.

Good documentation matters. Clear naming matters. Consistent patterns matter. Code review isn't just about catching bugs—it's about ensuring knowledge spreads across the team.

The best technical decision is worthless if no one else can understand it.

## Conclusion

Building systems that last is less about technology and more about discipline:

- Choose simplicity over cleverness
- Design for change, not perfection
- Expect and plan for failure
- Remember that humans maintain this code

These aren't exciting principles. They won't get you featured on Hacker News. But they're the difference between systems that survive and systems that get replaced.

