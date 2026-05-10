# Akuma Studio — Portfolio Website

A quiet modern anime-inspired illustrator portfolio built with Next.js.

---

## What You Need First

Install these before starting (click the links, download, run the installer):

1. **Node.js** → https://nodejs.org — download the **LTS** version, run the installer, click Next through everything
2. **Git** → https://git-scm.com/downloads — download for your OS, install with defaults
3. **VS Code** → https://code.visualstudio.com — download and install if you haven't already

---

## Step 1 — Open the Project in VS Code

1. Open VS Code
2. Go to **File → Open Folder**
3. Select this `akuma-studio` folder
4. You should see all the files on the left sidebar

---

## Step 2 — Open the Terminal in VS Code

1. In VS Code, go to **Terminal → New Terminal** (or press `` Ctrl+` `` on Windows / `` Cmd+` `` on Mac)
2. A black/dark panel will appear at the bottom — this is the terminal

---

## Step 3 — Install Dependencies

In the terminal, type this exactly and press Enter:

```
npm install
```

Wait for it to finish. You'll see a lot of text — that's normal. It takes 1–2 minutes.

---

## Step 4 — Run the Website Locally

In the terminal, type:

```
npm run dev
```

Then open your browser and go to:

```
http://localhost:3000
```

Your website is now running on your computer. You'll see it live.

To stop it, click the terminal and press `Ctrl+C`.

---

## Step 5 — Customize Your Content

All your content (project names, descriptions, notes) lives in one file:

```
src/lib/data.ts
```

Open it in VS Code, edit the text inside the quotes, and save. The browser will update automatically while `npm run dev` is running.

---

## Step 6 — Put It on GitHub

1. Go to https://github.com and create a free account if you don't have one
2. Click the **+** button (top right) → **New repository**
3. Name it `akuma-studio`, set it to **Public**, click **Create repository**
4. Copy the URL it gives you (looks like `https://github.com/yourname/akuma-studio.git`)

Back in VS Code terminal (stop the dev server first with `Ctrl+C`):

```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/akuma-studio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

---

## Step 7 — Deploy to Vercel (Free Hosting)

1. Go to https://vercel.com and sign up with your GitHub account
2. Click **Add New → Project**
3. Find `akuma-studio` in the list and click **Import**
4. Leave all settings as-is and click **Deploy**
5. Wait about 1 minute — your site will be live at a `.vercel.app` URL

---

## Updating Your Site Later

Whenever you make changes:

1. In VS Code terminal:
```
git add .
git commit -m "update content"
git push
```

Vercel will automatically rebuild and update your live site within ~1 minute.

---

## File Structure

```
akuma-studio/
├── src/
│   ├── app/               ← Each page of the website
│   │   ├── page.tsx       ← Homepage
│   │   ├── portfolio/     ← Portfolio gallery page
│   │   ├── projects/      ← Project case studies
│   │   ├── notes/         ← Studio journal
│   │   ├── about/         ← About page
│   │   └── contact/       ← Contact form
│   ├── components/        ← Reusable UI pieces
│   ├── lib/
│   │   └── data.ts        ← ★ Edit your content here
│   └── styles/
│       └── globals.css    ← All styling
└── public/                ← Put your images here
```

---

## Adding Your Own Artwork

1. Put your image files (JPG or PNG) in the `/public` folder
2. Open `src/lib/data.ts`
3. Find the work you want to update
4. Replace the `gradient` and `emoji` fields with an `image` path, e.g. `/your-image.jpg`

To use images in the code, replace the gradient div in the component with:
```jsx
<img src="/your-artwork.jpg" alt="Artwork title" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```

---

## Need Help?

- Next.js docs: https://nextjs.org/docs
- Vercel docs: https://vercel.com/docs
- VS Code basics: https://code.visualstudio.com/docs/introvideos/basics
