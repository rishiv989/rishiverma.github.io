# Rishi Rajesh Verma - AI/ML Engineer & Data Scientist Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Showcasing AI/ML projects, expertise in machine learning, computer vision, NLP, and RAG systems.

## Features

- **Modern Design**: Gradient backgrounds, smooth animations, and responsive layout
- **Home Page**: Eye-catching hero section with skill showcase
- **Projects Gallery**: Showcase your AI/ML projects with technologies used
- **About Section**: Detailed professional background, education, and experience
- **Contact Form**: Integrated contact form with EmailJS for message delivery
- **Resume Download**: Easy access to download your resume
- **Mobile Responsive**: Fully responsive design for all devices
- **Dark/Light Support**: Modern color scheme with good contrast

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **EmailJS** - Email service for contact forms
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file and add your EmailJS credentials:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Navbar Logo**: Edit [Navbar.tsx](src/components/Navbar.tsx)
2. **Home Hero**: Update [Home.tsx](src/pages/Home.tsx)
3. **Projects**: Modify project data in [Projects.tsx](src/pages/Projects.tsx)
4. **About Section**: Edit [About.tsx](src/pages/About.tsx)
5. **Contact Info**: Update [Contact.tsx](src/pages/Contact.tsx)
6. **Footer**: Modify [Footer.tsx](src/components/Footer.tsx)

### Colors & Styling

Edit [tailwind.config.js](tailwind.config.js) to customize colors and extend the theme.

### Add Files

Place your resume PDF in the `public` folder and update the download link in [About.tsx](src/pages/About.tsx).

## Contact Form Setup

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Get your credentials (Service ID, Template ID, Public Key)
4. Update the ContactForm component with your credentials

Alternatively, replace the EmailJS implementation with your preferred email service.

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

Update `vite.config.ts` with:
```ts
export default defineConfig({
  base: '/portfolio-repo-name/',
  // ...
})
```

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.
