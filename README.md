# Ebenezer Igogo | Portfolio

Personal portfolio of Ebenezer Igogo, a self-taught full-stack and mobile developer based in Calabar, Nigeria.

**Live site:** https://ebenycodes.vercel.app

## About

A single-page portfolio showing selected projects (React Native mobile apps, Next.js web apps, a FastAPI-backed analytics platform), a case study of the SmartClear X university clearance app, and a contact form.

## Built with

- Next.js (App Router) and React
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- Web3Forms (contact form)
- Deployed on Vercel

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/            Next.js layout and home page
components/     Page sections (Hero, Services, Work, Systems, About, CTA, Contact), Sidebar, Footer, Command palette (Ctrl/Cmd + K)
assets/         Icons, images and the data for projects and services (assets/assets.js)
public/         Static files, including the downloadable CV
```

## Editing content

- **Projects and services:** edit `workData` and `serviceData` in `assets/assets.js`.
- **Project screenshots:** put an image in `public/projects/` and set `image: '/projects/your-image.png'` on the project in `workData`. Projects without an image show a styled placeholder.
- **CV:** replace `public/Ebenezer-resume.pdf`.

## Contact

[LinkedIn](https://www.linkedin.com/in/igogo-ebenezer-47a483358/) | [GitHub](https://github.com/miles781)
