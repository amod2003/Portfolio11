# Amod Kumar — Portfolio

Personal portfolio website built with **Next.js 14** and **TailwindCSS**, showcasing my work as a Software Engineer. Features a hero section, experience timeline, projects, skills, education, and a contact form powered by Formspree.

---

## Live Preview

![Portfolio Preview](./public/image/screen.png)

---

## About Me

I'm a **Software Engineer** currently building production-grade systems at **NuLook** (Beauty & Wellness Platform, Bengaluru). I specialize in backend engineering with FastAPI, PostgreSQL, and Redis — and work across the full stack with React and Next.js.

**Core Stack:** FastAPI · React · PostgreSQL · MongoDB · Redis · Docker · AWS · JWT · Razorpay · Firebase

---

## Sections

- **Hero** — Introduction, tech stack code block, social links, resume download
- **About** — Profile summary
- **Experience** — NuLook (Full Stack Developer) · TechnoWard Technologies (SDE Intern)
- **Skills** — Python, JavaScript, TypeScript, React, Next.js, FastAPI, PostgreSQL, MongoDB, Docker, AWS, and more
- **Projects** — InvoiceHub (SaaS billing platform) · Live Collaborative Whiteboard
- **Education** — BE Information Science, Visvesvaraya Technological University (2021–2025)
- **Contact** — Contact form (Formspree) with email, phone, and social links

---

## Projects Featured

### InvoiceHub — Multi-Tenant SaaS Invoice & Billing Platform
> React · Vite · FastAPI · MongoDB · Stripe · JWT · Vercel · Railway

Multi-tenant invoice management app with role-based access, line items, taxes, discounts, PDF generation, email delivery, and Stripe payment integration with webhook-based status updates.

**Live:** https://invoice-hub-two.vercel.app

---

### Live Collaborative Whiteboard
> React · FastAPI · WebSockets · Canvas API · Railway

Real-time multi-user whiteboard with room-based sessions, freehand drawing, eraser, canvas clear, PNG export, and instant link sharing. Powered by FastAPI WebSockets for low-latency sync.

**Live:** https://live-collaborative-whiteboard-production.up.railway.app

---

## Tech Stack

| Layer       | Technologies                                      |
|-------------|---------------------------------------------------|
| Frontend    | Next.js 14, React, TailwindCSS                    |
| Styling     | TailwindCSS, SASS, react-icons                    |
| Animations  | Lottie React, CSS animations                      |
| Contact     | Formspree, React Toastify                         |
| Deployment  | Vercel                                            |

---

## Getting Started

**Prerequisites:** Node.js 18+ and Git

```bash
# Clone the repo
git clone https://github.com/amod2003/developer-portfolio.git
cd developer-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io) — no configuration needed. To use your own endpoint, update the form action URL in:

```
app/components/homepage/contact/contact-form.jsx
```

Replace `https://formspree.io/f/movarwwl` with your own Formspree endpoint.

---

## Customization

All portfolio data lives in `utils/data/`:

| File                  | Content                        |
|-----------------------|--------------------------------|
| `personal-data.js`    | Name, bio, links, resume URL   |
| `experience.js`       | Work experience entries        |
| `projects-data.js`    | Project cards                  |
| `skills.js`           | Skills list                    |
| `educations.js`       | Education entries              |

---

## Packages Used

| Package            | Purpose                        |
|--------------------|--------------------------------|
| `next`             | React framework                |
| `tailwindcss`      | Utility-first CSS              |
| `sass`             | SCSS support                   |
| `react-icons`      | Icon library                   |
| `lottie-react`     | Lottie animations              |
| `react-fast-marquee` | Skills marquee               |
| `react-toastify`   | Toast notifications            |

---

## Connect

- **Email:** amodk9835@gmail.com
- **LinkedIn:** [linkedin.com/in/amod-kumar-3bbb15254](https://www.linkedin.com/in/amod-kumar-3bbb15254)
- **GitHub:** [github.com/amod2003](https://github.com/amod2003)
- **LeetCode:** [leetcode.com/u/amod_chauhan](https://leetcode.com/u/amod_chauhan/)
