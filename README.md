# Abdul-Rashid Dasana Abdulai — portfolio

Personal site: physician, medical AI researcher and digital health builder.

Live: https://portfoliofinal-gamma-two.vercel.app

## Editing content

Almost all text lives in [`src/content.ts`](src/content.ts): profile, research, projects, publications, experience, skills and recognition. Edit it there; the page layout is in `src/pages/Index.tsx`.

The CV link points to `public/cv/Abdul-Rashid-Dasana-Abdulai-CV.pdf` (`CV_URL` in `content.ts`). Replace that file to update the CV.

## Development

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build in dist/
```

Built with Vite, React, TypeScript and Tailwind CSS. Deployed on Vercel (`vercel.json`).
