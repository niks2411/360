# 360° Website Control

A comprehensive responsive multi-page website built with React and Tailwind CSS that provides complete digital solutions for SEO, Marketing, and Analytics.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimal corporate design with dark accents for contrast
- **Sticky Navigation**: Top navigation bar with dropdown preview functionality
- **Smooth Animations**: Framer Motion animations and Tailwind transitions
- **SEO Optimized**: Semantic HTML and proper meta descriptions
- **Interactive Charts**: Recharts integration for analytics visualization
- **Contact Form**: Functional contact form with validation

## Pages

- **Home**: Hero section with overview of services and company stats
- **SEO Tools**: Keyword analysis, meta tag generator, sitemap builder
- **Marketing Tools**: Email campaigns, ad tracking, automation
- **Analytics**: Interactive charts and performance dashboards
- **Services**: Service cards with pricing and features
- **About Us**: Team information, mission, vision, and company timeline
- **Contact**: Contact form and company information

## Tech Stack

- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **React Router**: Client-side routing
- **Recharts**: Chart library for analytics visualization
- **Lucide React**: Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 360-website-control
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Layout.js          # Main layout wrapper
│   ├── Navbar.js          # Sticky navigation with dropdown
│   └── Footer.js          # Footer with links and social media
├── pages/
│   ├── Home.js            # Homepage with hero and features
│   ├── SEOTools.js        # SEO tools and optimization
│   ├── MarketingTools.js   # Marketing tools and automation
│   ├── Analytics.js       # Analytics dashboard with charts
│   ├── Services.js        # Services and pricing
│   ├── AboutUs.js         # About us and team
│   └── Contact.js         # Contact form and information
├── App.js                 # Main app component with routing
├── index.js               # React entry point
└── index.css              # Global styles and Tailwind imports
```

## Key Features

### Navigation
- Sticky navbar that stays visible while scrolling
- Dropdown menus with image previews on hover
- Mobile-responsive hamburger menu
- Smooth transitions and animations

### Design System
- Consistent color palette with dark accents
- Professional typography using Inter font
- Card-based layouts with hover effects
- Responsive grid system

### Animations
- Framer Motion for page transitions
- Hover effects and micro-interactions
- Smooth scrolling between sections
- Loading animations and state changes

### SEO Optimization
- Semantic HTML structure
- Meta descriptions and Open Graph tags
- Proper heading hierarchy
- Alt text for images

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue and indigo variants
- Dark accents: Dark gray palette
- Accent colors: Green, purple, orange for different sections

### Content
- Update company information in Footer.js
- Modify team members in AboutUs.js
- Customize services in Services.js
- Update contact information in Contact.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact us at contact@360websitecontrol.com
