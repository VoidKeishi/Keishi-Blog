# Blog Context Document
> For AI-assisted blog development in Cursor

---

## Author Context

**Name:** Phạm Phan Anh (Keishi)  
**Identity:** Software Engineer & Founder, 22, Hanoi, Vietnam  
**Current:** Final-year CS student at HUST, Software Project Leader at Samsung, co-founding two startups (Leaply + stealth AI ERP)

### Key Adjectives (Influence the Design)
```
Primary:    Pragmatic · Resourceful · Rational · Ambitious
Technical:  Systems-minded · Analytical · Methodical · Self-taught
Personal:   Resilient · Empathetic · Community-driven · Growth-oriented
```

### Writing Voice
- Clear, direct, no fluff
- Technical depth when needed, accessible when not
- Opinionated but reasoned
- Occasional dry humor
- Bridges engineering thinking with human problems

### What This Blog Is
A space for essays on technology, systems thinking, society, and life. Written by someone who grew up with limited resources, taught themselves to build things, and believes in using rationality to solve real problems.

**Tagline options:**
- "Building, thinking, writing."
- "Essays on technology and things that matter."
- "A pragmatic engineer's notebook."

---

## Design Direction

### Theme Philosophy

**Light Mode — Warm Paper Stationery**
- Background: Cream/ivory (#FAF8F5, #F7F4EF, or similar warm white)
- Text: Warm dark brown-black (#2C2825) — never pure black
- Accents: Muted warm tones (terracotta, sage, warm gray)
- Feel: Quality notebook, morning reading, Sunday paper, worn leather journal
- Texture: Subtle paper grain (optional, very light)

**Dark Mode — Classy Ink (NOT brown)**
- Background: Deep charcoal (#1A1A1D) or ink blue-black (#0F1419)
- Text: Warm off-white (#E8E4DD, #D4D0C8)
- Accents: Muted gold (#C9A227), soft amber, or warm gray
- Feel: Late-night reading, leather-bound journal, focused study
- NO brown tones — keep it cool and sophisticated

### Typography
```
Headings:    Serif with character
             → Playfair Display, Newsreader, or Freight Text
             
Body:        Highly readable, comfortable for long essays
             → Source Serif Pro, iA Writer Quattro, or Lora
             
Code:        Monospace with personality
             → JetBrains Mono (consistent with portfolio)
             
Nav/UI:      Clean sans-serif
             → Inter, DM Sans, or similar
```

### Visual Principles
- Generous whitespace — content breathes
- Clear typographic hierarchy
- Subtle transitions, not flashy animations
- Cards/containers with soft shadows (light mode) or subtle borders (dark mode)
- No clutter, every element earns its place
- Feels handcrafted, not template-generated

### Reference Aesthetic
Study these for tone:
- **Paul Graham's essays** — simplicity, text-focused
- **The Marginalian** (Maria Popova) — warmth, intellectual depth
- **Overreacted** (Dan Abramov) — clean dev blog, great dark mode
- **Derek Sivers** — minimal, personality-driven
- **Gwern.net** — dense but navigable, serious reader vibes

---

## Site Structure

### Navigation
```
┌──────────────────────────────────────────────────────────────┐
│  Keishi's Blog     Home   Topics   Archive   About   [◐]    │
└──────────────────────────────────────────────────────────────┘
```

| Item | Function |
|------|----------|
| Logo/Title | Home link, could be "Keishi" or custom mark |
| Home | Dashboard view |
| Topics | Browse by category |
| Archive | Chronological list of all posts |
| About | Blog info, author, colophon |
| [◐] | Theme toggle (light/dark) |

Optional: RSS icon, Search icon

---

## Page Designs

### Home (Dashboard)

Not a basic post list — a curated entry point:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   Welcome.                                                  │
│   I write about technology, systems thinking,               │
│   and ideas that matter.                                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   START HERE                                                │
│   ┌─────────────────┐ ┌─────────────────┐                  │
│   │ [Pinned Post 1] │ │ [Pinned Post 2] │                  │
│   │ Essential read  │ │ Who I am        │                  │
│   └─────────────────┘ └─────────────────┘                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   RECENT WRITING                                            │
│                                                             │
│   Post Title Here                                           │
│   Brief excerpt or description...          Tech · 3 days   │
│   ─────────────────────────────────────────────────────    │
│   Another Post Title                                        │
│   Brief excerpt...                      Society · 1 week   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   EXPLORE TOPICS                                            │
│   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐             │
│   │ Tech   │ │Systems │ │Society │ │  Life  │             │
│   │   12   │ │   8    │ │   6    │ │   4    │             │
│   └────────┘ └────────┘ └────────┘ └────────┘             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Topics Page

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   TOPICS                                                    │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │ TECH                                            12  │  │
│   │ Engineering, AI, tools, building software           │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │ SYSTEMS                                          8  │  │
│   │ Mental models, processes, thinking frameworks       │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │ SOCIETY                                          6  │  │
│   │ Social issues, education, justice, culture          │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   (etc.)                                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Single Topic Page (e.g., /topics/tech)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   TECH                                                      │
│   Engineering, AI, tools, building software                 │
│                                                             │
│   ─────────────────────────────────────────────────────    │
│                                                             │
│   Post Title                                    Jan 2025   │
│   Brief description...                                      │
│                                                             │
│   Another Post                                  Dec 2024   │
│   Brief description...                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Archive Page

Simple chronological list, grouped by year:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   ARCHIVE                                                   │
│                                                             │
│   2025                                                      │
│   ▸ Post Title                              Tech · Jan 15  │
│   ▸ Another Post                         Society · Jan 3   │
│                                                             │
│   2024                                                      │
│   ▸ Post Title                           Systems · Dec 20  │
│   ▸ Another Post                            Life · Dec 5   │
│   ...                                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### About Page

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   ABOUT THIS BLOG                                           │
│                                                             │
│   Why I Write                                               │
│   [2-3 paragraphs on writing philosophy]                    │
│                                                             │
│   What You'll Find                                          │
│   [Brief overview of topics]                                │
│                                                             │
│   About Me                                                  │
│   [Short bio, link to portfolio]                            │
│                                                             │
│   Colophon                                                  │
│   Built with Astro. Typed in JetBrains Mono.               │
│   Hosted on Vercel. Content managed with Decap CMS.        │
│                                                             │
│   Connect                                                   │
│   → Portfolio: https://keishi.vercel.app/                                   │
│   → GitHub: VoidKeishi                                      │
│   → Email: phananha4@gmail.com                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Single Post Page

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   POST TITLE HERE                                           │
│                                                             │
│   Tech · January 15, 2025 · 8 min read                     │
│                                                             │
│   ─────────────────────────────────────────────────────    │
│                                                             │
│   [Post content in beautiful typography]                    │
│                                                             │
│   Lorem ipsum dolor sit amet, consectetur adipiscing        │
│   elit. Sed do eiusmod tempor incididunt ut labore.        │
│                                                             │
│   ## Subheading                                             │
│                                                             │
│   More content here with proper spacing and rhythm...       │
│                                                             │
│   ─────────────────────────────────────────────────────    │
│                                                             │
│   Tags: #ai #engineering #tools                            │
│                                                             │
│   ─────────────────────────────────────────────────────    │
│                                                             │
│   ← Back to Home                          Next Post →      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Content Structure

### Topic System

**Primary Topics (5):**
| Topic | Slug | Description |
|-------|------|-------------|
| Tech | `tech` | Engineering, AI, tools, code, building |
| Systems | `systems` | Mental models, processes, thinking frameworks |
| Society | `society` | Social issues, education, justice, culture |
| Startups | `startups` | Founder journey, lessons, building companies |
| Life | `life` | Personal essays, philosophy, reflections |

**Secondary Tags:**
Flexible, can grow: `#ai`, `#vietnam`, `#rationality`, `#career`, `#books`, etc.

### Post Frontmatter Schema
```yaml
---
title: "Post Title"
date: 2025-01-15
topic: tech
tags: ["ai", "tools"]
description: "Brief excerpt for previews"
pinned: false
draft: false
---
```

---

## Unique Features (Keishi Touches)

### 1. Reading Metadata
```
8 min read · ◆◆◇ (intermediate)
```
Show reading time + optional complexity indicator.

### 2. Post Changelog
```
Published: January 2025
Updated: March 2025 — Added section on implementation
```
Living documents, transparent updates.

### 3. Connected Reading
At end of posts:
```
Related Essays
→ "Systems Thinking for Engineers"
→ "Why I Build Things"
```

### 4. Colophon (About Page)
Technical details about how the blog is built. Engineers appreciate this.

---

## Technical Requirements

### Stack
```
Framework:  Astro (static site generation)
Styling:    Tailwind CSS
CMS:        Decap CMS (admin at /admin)
Hosting:    Vercel or Netlify
Content:    Markdown with YAML frontmatter
```

### Project Structure
```
blog/
├── public/
│   ├── admin/
│   │   ├── index.html        ← Decap CMS entry
│   │   └── config.yml        ← CMS configuration
│   └── uploads/              ← Media uploads
├── src/
│   ├── content/
│   │   ├── posts/            ← Markdown posts
│   │   └── config.ts         ← Content collections schema
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro       ← Home (dashboard)
│   │   ├── topics/
│   │   │   ├── index.astro   ← All topics
│   │   │   └── [topic].astro ← Single topic
│   │   ├── archive.astro
│   │   ├── about.astro
│   │   └── posts/
│   │       └── [...slug].astro
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── ThemeToggle.astro
│   │   ├── PostCard.astro
│   │   ├── TopicCard.astro
│   │   └── Footer.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── tailwind.config.mjs
```

### Decap CMS Setup

**public/admin/index.html:**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blog Admin</title>
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </head>
  <body></body>
</html>
```

**public/admin/config.yml:**
```yaml
backend:
  name: github
  repo: VoidKeishi/blog  # Update with actual repo
  branch: main

media_folder: "public/uploads"
public_folder: "/uploads"

collections:
  - name: "posts"
    label: "Posts"
    folder: "src/content/posts"
    create: true
    slug: "{{slug}}"
    fields:
      - { name: "title", label: "Title", widget: "string" }
      - { name: "date", label: "Date", widget: "datetime" }
      - { name: "topic", label: "Topic", widget: "select", 
          options: ["tech", "systems", "society", "startups", "life"] }
      - { name: "tags", label: "Tags", widget: "list", required: false }
      - { name: "description", label: "Description", widget: "text" }
      - { name: "pinned", label: "Pinned", widget: "boolean", default: false }
      - { name: "draft", label: "Draft", widget: "boolean", default: false }
      - { name: "body", label: "Body", widget: "markdown" }
```

### Key Features to Implement
- [ ] Light/dark theme toggle with system preference detection
- [ ] Smooth theme transition (no flash)
- [ ] Reading time calculation
- [ ] Post filtering by topic
- [ ] Tag display and linking
- [ ] RSS feed generation
- [ ] SEO meta tags
- [ ] Open Graph images
- [ ] Mobile responsive navigation
- [ ] Accessible (keyboard nav, proper headings, contrast)

### Performance Targets
- Lighthouse > 95 all categories
- First paint < 1s
- Zero layout shift
- Static generation for all pages

---

## Summary for AI

**Build a personal blog with these priorities:**

1. **Astro + Tailwind + Decap CMS** — static, fast, git-backed content
2. **Warm paper aesthetic (light)** — cream, comfortable, quality stationery feel
3. **Classy dark mode** — charcoal/ink (NOT brown), sophisticated, focused
4. **Dashboard home** — curated entry with pinned posts, recent writing, topic exploration
5. **Topic system** — 5 primary topics, flexible tags
6. **Typography-driven** — beautiful reading experience, serif for content
7. **Engineer touches** — reading time, changelog, colophon

**The blog should feel like a well-crafted notebook owned by someone who thinks deeply and builds real things.**