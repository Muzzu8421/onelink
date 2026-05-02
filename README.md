# OneLink

> One Link. Endless Possibilities.

**OneLink** is a modern link management platform that lets you connect your audience to everything you do — your content, products, social media, and more. All in one beautiful, customizable page.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev)
[![MongoDB](https://img.shields.io/badge/MongoDB-7-green?style=flat-square&logo=mongodb)](https://www.mongodb.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)

## ✨ Features

- **Instant Setup** — Create your OneLink in minutes with a simple 4-step wizard
- **Custom Handle** — Claim your unique username (e.g., `onelink.to/yourname`)
- **Rich Link Management** — Add unlimited links to social media, products, websites, and more
- **Profile Customization** — Upload a profile image and write a compelling bio
- **Beautiful Design** — Modern, responsive UI that looks great on all devices
- **Dark Mode Support** — Automatic theme switching with next-themes
- **Live Preview** — See your OneLink as you build it
- **Completely Free** — No credit card required, free forever

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/onelink.git
   cd onelink
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Creating Your OneLink

1. Enter your desired handle on the homepage
2. Click "Get Started Free"
3. Follow the 4-step setup:
   - **Step 1:** Claim your unique handle
   - **Step 2:** Write a short description about yourself
   - **Step 3:** Add links to your social media and websites
   - **Step 4:** Upload a profile image
4. Click "Create My OneLink" and share your unique URL!

### Sharing Your OneLink

Once created, share your OneLink URL with your audience:
```
onelink.to/yourname
```

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | Full-stack React framework with App Router |
| **React 19** | UI component library |
| **MongoDB 7** | NoSQL database for storing user data |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **Rive** | Smooth animations and interactive graphics |
| **next-themes** | Dark mode and theme management |

## 📁 Project Structure

```
onelink/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── create/          # API endpoint for creating OneLinks
│   │   ├── generate/            # Multi-step wizard page
│   │   ├── [handle]/            # Dynamic user profile pages
│   │   ├── layout.js            # Root layout with navbar
│   │   ├── page.js              # Homepage
│   │   └── globals.css          # Global styles
│   └── components/
│       ├── Navbar.js            # Navigation bar
│       ├── CustomizationSection.js
│       └── ShareSection.js
├── lib/                         # Utility functions
├── public/                      # Static assets
├── package.json
└── next.config.mjs
```

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your MongoDB URI to environment variables
4. Deploy with one click

### Deploy on Other Platforms

- **Docker**: Create a Dockerfile and deploy to any container platform
- **Self-hosted**: Use `npm run build` and `npm run start` on your server

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

Please ensure your code follows the project's style guide and includes appropriate tests.

## 📋 Roadmap

- [ ] Analytics dashboard for link clicks
- [ ] Custom domain support
- [ ] Link scheduling
- [ ] QR code generation
- [ ] Advanced customization themes
- [ ] Social media integration for auto-add

## 🐛 Bug Reports & Feature Requests

Found a bug? Have a feature idea? Please [open an issue](https://github.com/yourusername/onelink/issues) on GitHub.

When reporting bugs, please include:
- Description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org) and [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Database powered by [MongoDB](https://www.mongodb.com)
- Icons by [Lucide React](https://lucide.dev)
- Animations by [Rive](https://rive.app)

---

**Made with ❤️ by the OneLink team**
