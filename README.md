# 🚀 Rohan Reddy Portfolio

A blazing-fast, modern portfolio platform built using **React 18**, **Next.js 14**, **Tailwind CSS**, and **GitHub Pages** for deployment. Originally inspired by `bjornmelin-platform-io`, this project has been customized and rebuilt to reflect my work as an **AI Cloud Engineer** focused on **AI/ML applications**, **cloud-native architectures**, and **production-grade deployment**

![GitHub](https://img.shields.io/github/followers/rohanreddy1201?style=social)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-blue?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Platform](https://img.shields.io/badge/Hosted%20On-GitHub%20Pages-blueviolet?logo=github)

## 🌟 Features

- ⚙️ **100% Static Export**: No backend required — runs purely on GitHub Pages.
- 🧠 **AI/ML Projects Showcase**: Purpose-built to highlight impactful real-world machine learning solutions.
- 💡 **Interactive UI**: Smooth transitions, modern UI, and accessible design.
- 🔧 **Built with Next.js 14**: Using App Router, server/client components, and metadata API.
- 🎯 **Fully Customizable**: From metadata to layout, project structure is easy to configure and scale.

## 📁 Project Structure

```
.
├── public/                 # Static assets (images, favicons, etc.)
├── src/
│   ├── app/               # Next.js App Router entry
│   ├── components/        # Shared and UI components
│   ├── data/              # Projects and skills data
│   ├── lib/               # Utility functions and schemas
│   └── styles/            # TailwindCSS & globals
├── .github/               # GitHub Actions for deploy
├── .env.local             # Environment variables (excluded from git)
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.x
- npm or yarn
- GitHub account
- [Formspree](https://formspree.io/) (for contact form)

### 1. Clone and Install

```bash
git clone https://github.com/rohanreddy1201/rohanreddy-portfolio.git
cd rohanreddy-portfolio
npm install
```

### 2. Configure Environment

Create a `.env.local` file and add:

```bash
NEXT_PUBLIC_APP_URL=https://rohanreddy1201.github.io
NEXT_PUBLIC_CONTACT_EMAIL=youremail@example.com
```

If you're using Formspree:

```bash
FORMSPREE_ENDPOINT=https://formspree.io/f/your-id
```

### 3. Develop Locally

```bash
npm run dev
```

### 4. Build & Export

```bash
npm run build
npm run export
```

This will generate the static site inside `/out`.

### 5. Deploy to GitHub Pages

Set up GitHub Pages from the `gh-pages` branch or use an action:

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
"scripts": {
  "deploy": "gh-pages -d out"
}
```

Then run:

```bash
npm run deploy
```

## 🧠 Featured Projects

- **AutoMeet** – AI-based meeting scheduler and summarizer.
- **ContractSense** – NLP-driven legal document analyzer.
- **RentMind** – Rental prediction platform with explainable AI.
- **ResumeLens** – AI-powered resume feedback generator.
- **AaharAI** – Smart food classification and nutritional analysis.

## 🔧 Built With

- React 18
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- GitHub Pages

## 👨‍💻 Author

**Rohan Reddy**  
AI Cloud Engineer | ML Developer | Cloud-Native Enthusiast  
- GitHub: [@rohanreddy1201](https://github.com/rohanreddy1201)  
- LinkedIn: [roreddy](https://www.linkedin.com/in/roreddy/)

## 📄 License

MIT © 2025 Rohan Reddy

---

> Designed with scalability, speed, and simplicity in mind. Deployed serverlessly.
