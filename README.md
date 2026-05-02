# OneLink

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7-13AA52?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

One Link. Endless Possibilities. — Connect your audience to everything you do with a beautiful, customizable landing page.

[Live Demo](#) • [Features](#features) • [Quick Start](#quick-start) • [Documentation](#documentation) • [Contributing](#contributing)

</div>

---

## Highlights

- **4-Step Wizard**: Intuitive multi-step form for creating your OneLink in minutes
- **Custom Handles**: Claim unique usernames with real-time availability validation
- **Profile Customization**: Upload profile images, write compelling bios, add unlimited links
- **Responsive Design**: Beautiful UI optimized for desktop, tablet, and mobile devices
- **Dark Mode Support**: Seamless theme switching with localStorage persistence
- **Production-Ready**: Full-stack architecture with MongoDB backend and real-time validation

---

## Table of Contents

- [Highlights](#highlights)
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [API Reference](#api-reference)
  - [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [Architecture](#architecture)
- [Development](#development)
- [Roadmap](#roadmap)
- [Learnings](#learnings)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## Overview

**OneLink** is a production-ready full-stack application for creating personalized link landing pages. Built with Next.js, React, and MongoDB, it streamlines how creators, entrepreneurs, and businesses connect their audience to all their content in one beautiful place.

### Key Design Decisions

- **Next.js App Router**: Modern React with server-side rendering and dynamic routing
- **Multi-Step Form Pattern**: Progressive disclosure for better UX and data validation
- **MongoDB Collections**: Scalable document storage with indexing for unique handles
- **Dynamic Routes** (`[handle]`): Unlimited user profiles without pre-configuration
- **Client-Side Image Conversion**: Base64 encoding for profile images stored with document data
- **Real-Time Validation**: Immediate feedback on handle availability and form requirements

---

## Features

<table>
  <tr>
    <td width="50%">
      <h3>🔗 Core Features</h3>
      <ul>
        <li><strong>Claim Your Handle</strong> - Unique, memorable usernames</li>
        <li><strong>Add Profile Image</strong> - Upload and display profile picture</li>
        <li><strong>Bio Section</strong> - Write a compelling description</li>
        <li><strong>Link Management</strong> - Add unlimited links with titles</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🎨 User Experience</h3>
      <ul>
        <li><strong>Dark Mode</strong> - Light/dark theme with persistence</li>
        <li><strong>Responsive Design</strong> - Mobile-first, works everywhere</li>
        <li><strong>Beautiful UI</strong> - Tailwind CSS with modern aesthetics</li>
        <li><strong>Smooth Animations</strong> - Rive-powered interactive graphics</li>
      </ul>
    </td>
  </tr>
</table>

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Frontend Framework** | Next.js | 16.1.6 |
| **UI Library** | React | 19.2.3 |
| **Styling** | Tailwind CSS | 4 |
| **Database** | MongoDB | 7.0.0 |
| **Animations** | Rive | 4.26.2 |
| **Icons** | Lucide React | 0.563.0 |
| **Theme Management** | next-themes | 0.4.6 |
| **Linting** | ESLint | 9 |

---

## Quick Start

### Prerequisites

- **Node.js** 18.17+
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/Muzzu8421/onelink.git
cd onelink

# Install dependencies
npm install

# Set up environment variables
echo 'MONGODB_URI=your_mongodb_connection_string' > .env.local

# Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Documentation

### Installation

<details>
<summary><b>Full Installation Guide</b></summary>

#### 1. Clone Repository
```bash
git clone https://github.com/Muzzu8421/onelink.git
cd onelink
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Environment Setup
Create `.env.local` in the project root:
```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/onelink
```

**MongoDB Atlas Setup:**
1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string from "Connect" button
4. Replace `username` and `password` with your credentials
5. Add `/onelink` to the end for database name

#### 4. Run Locally
```bash
npm run dev
```

#### 5. Production Build
```bash
npm run build
npm start
```

</details>

### Configuration

**Environment Variables:**

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `MONGODB_URI` | ✅ | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/onelink` |

### Usage

#### Creating Your OneLink

1. Navigate to homepage
2. Enter your desired handle (e.g., "yourname")
3. Click "Get Started Free"
4. **Step 1**: Confirm your handle (`onelink.to/yourname`)
5. **Step 2**: Write a short bio/description
6. **Step 3**: Add links to social media, websites, products
7. **Step 4**: Upload profile image
8. Click "Create My OneLink"
9. Share your unique URL with your audience!

```
Example OneLink:
- Handle: johnsmith
- URL: onelink.to/johnsmith
- Links: Instagram, Twitter, Portfolio, Shop
- Bio: Designer & entrepreneur sharing my journey
```

#### Sharing Your OneLink

```
Share this link:
https://yoursite.com/johnsmith

Visitors click and see:
- Profile image
- Bio
- All your links in one place
```

### API Reference

#### Create OneLink

**Endpoint:** `POST /api/create`

**Request:**
```json
{
  "handle": "yourname",
  "desc": "Your bio here",
  "links": [
    {
      "title": "Instagram",
      "url": "https://instagram.com/yourname"
    },
    {
      "title": "Portfolio",
      "url": "https://yourportfolio.com"
    }
  ],
  "profileImage": "data:image/jpeg;base64,..."
}
```

**Response (Success - 200):**
```json
{
  "Success": true,
  "message": "OneLink created successfully",
  "handle": "yourname"
}
```

**Response (Error - 409 - Duplicate Handle):**
```json
{
  "Success": false,
  "message": "Handle already exists"
}
```

### Project Structure

```
onelink/
├── src/
│   ├── app/
│   │   ├── layout.js                 # Root layout with navbar
│   │   ├── page.js                   # Homepage landing page
│   │   ├── generate/
│   │   │   └── page.js               # 4-step wizard form
│   │   ├── [handle]/
│   │   │   └── page.js               # Dynamic profile pages
│   │   ├── api/
│   │   │   └── create/
│   │   │       └── route.js          # POST /api/create endpoint
│   │   ├── globals.css               # Global styles
│   │   └── favicon.ico               # Site favicon
│   ├── components/
│   │   ├── Navbar.js                 # Navigation bar
│   │   ├── CustomizationSection.js   # Homepage features section
│   │   └── ShareSection.js           # Call-to-action section
│   └── lib/
│       └── mongodb.js                # MongoDB client config (if exists)
├── public/                            # Static assets (images, gifs)
│   ├── test2.gif                     # Homepage animation
│   └── gen.avif                      # Generator page image
├── .env.local                         # Environment variables
├── next.config.mjs                    # Next.js configuration
├── tailwind.config.js                 # Tailwind CSS config
├── jsconfig.json                      # JavaScript config
└── package.json                       # Dependencies
```

---

## Database Schema

### Collection: `onelinks`

```javascript
{
  _id: ObjectId,
  handle: String,              // Unique username (indexed)
  desc: String,                // Bio/description
  profileImage: String,        // Base64 encoded image
  links: [
    {
      title: String,           // e.g., "Instagram"
      url: String              // e.g., "https://instagram.com/..."
    }
  ],
  createdAt: Date,             // Creation timestamp
  updatedAt: Date              // Last update timestamp
}
```

**Indexes:**
```javascript
db.onelinks.createIndex({ handle: 1 }, { unique: true })
```

---

## Architecture

```
┌──────────────────────────────────────────────┐
│          User Browser                        │
├──────────────────────────────────────────────┤
│   Next.js Frontend (React Components)        │
│   ├─ Homepage (landing page)                 │
│   ├─ Generator (4-step wizard)               │
│   ├─ Profile (dynamic [handle] page)         │
│   └─ Theme Manager (localStorage)            │
├──────────────────────────────────────────────┤
│      Next.js API Routes (Backend)            │
│   └─ POST /api/create (OneLink creation)    │
│   └─ GET /[handle] (Profile retrieval)      │
├──────────────────────────────────────────────┤
│       MongoDB Database                       │
│   └─ onelinks collection (User data)        │
└──────────────────────────────────────────────┘
```

**Data Flow:**
1. User enters handle on homepage → clicks "Get Started Free"
2. Navigates to /generate with handle as query param
3. Fills 4-step form with bio, links, and profile image
4. Submits POST request to `/api/create`
5. Backend validates handle uniqueness, stores in MongoDB
6. Redirect to `/:handle` dynamic route
7. Visitor accesses profile → fetches from DB → displays OneLink page

---

## Development

### Available Scripts

```bash
npm run dev       # Start dev server (http://localhost:3000)
npm run build     # Production build
npm start         # Run production build
npm run lint      # Run ESLint
```

### Pages Reference

| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Landing page / homepage | ✅ Active |
| `/generate` | OneLink creation wizard | ✅ Active |
| `/[handle]` | User profile page | ✅ Active |
| `/api/create` | Create OneLink endpoint | ✅ Active |

---

## Roadmap

### Phase 1: Foundation ✅
- [x] Multi-step form wizard
- [x] Profile image upload
- [x] Links management
- [x] Dynamic profile pages
- [x] Responsive design
- [x] Dark mode support

### Phase 2: Analytics
- [ ] Click tracking per link
- [ ] View count statistics
- [ ] Time-series analytics dashboard
- [ ] Link performance insights

### Phase 3: Advanced Features
- [ ] User authentication & accounts
- [ ] Edit existing OneLinks
- [ ] Link scheduling
- [ ] QR code generation
- [ ] Custom domains (yourname.com)
- [ ] Link categories/sections
- [ ] Social media auto-population

### Phase 4: Scale & Performance
- [ ] Rate limiting
- [ ] Caching layer (Redis)
- [ ] CDN integration
- [ ] Monitoring & alerts
- [ ] API keys for programmatic access
- [ ] Webhook support

---

## Learnings

### Technical Insights Gained

**Frontend Architecture**
- Building multi-step forms with React hooks for progressive data collection
- Client-side file handling and Base64 encoding for image data
- Dynamic routing with catch-all segments (`[handle]`) for URL patterns
- Query parameter parsing for pre-filling form data

**Backend Development**
- RESTful API design with Next.js API routes and proper HTTP methods
- Request validation and error handling at the API layer
- MongoDB connection management and document operations
- Handling concurrent requests safely

**Database Design**
- Unique indexing strategy for preventing duplicate handles
- Storing nested arrays (links) within documents vs. separate collections
- Base64 image encoding trade-offs (storage vs. performance)
- Timestamp management for audit trails and future analytics

**Full-Stack Considerations**
- Environment variable management for development, staging, production
- Responsive mobile-first design with Tailwind CSS
- Theme persistence using browser localStorage
- How to structure code for feature scaling (components, API routes, database queries)
- UX patterns for form validation and user feedback

---

## Contributing

Contributions make the open source community amazing! We welcome:

- **Bug Reports** - Issues with features or functionality
- **Feature Requests** - New ideas and enhancements
- **Pull Requests** - Code improvements and fixes
- **Documentation** - README updates, guides, examples

### Getting Started with Development

```bash
# Fork the repo on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/onelink.git
cd onelink

# Create a feature branch
git checkout -b feature/amazing-feature

# Make changes and commit
git add .
git commit -m "feat: Add amazing feature"

# Push to your fork
git push origin feature/amazing-feature

# Open Pull Request on GitHub
```

### Code Style

- Use ESLint: `npm run lint`
- Follow React & Next.js best practices
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes locally before submitting

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - You are free to use this project for personal or commercial purposes.
```

---

## Support

### Getting Help

- 📖 **Documentation** - Read the [full guide](#documentation)
- 🐛 **Bug Reports** - [Open an issue](https://github.com/Muzzu8421/onelink/issues)
- 💬 **Discussions** - [GitHub Discussions](https://github.com/Muzzu8421/onelink/discussions)

### Troubleshooting

<details>
<summary><b>MongoDB connection fails</b></summary>

1. Verify `MONGODB_URI` in `.env.local`
2. Check MongoDB Atlas IP whitelist (add your IP)
3. Ensure database name is correct: `onelink`
4. Test connection: `node -e "require('mongodb').MongoClient.connect(process.env.MONGODB_URI)"`
5. Check network connectivity to MongoDB cluster

</details>

<details>
<summary><b>Handle already exists error</b></summary>

1. Try a different handle - this one is already taken
2. Check MongoDB for duplicate indexes: `db.onelinks.getIndexes()`
3. If stuck, contact support or try with timestamp: `username_1234`

</details>

<details>
<summary><b>Profile image not uploading</b></summary>

1. Check file size (keep under 5MB)
2. Ensure it's a valid image format (JPG, PNG, GIF, WebP)
3. Check browser console for errors (F12 → Console tab)
4. Try a different image file
5. Clear browser cache and try again

</details>

<details>
<summary><b>Profile page not loading</b></summary>

1. Verify the handle is correct (check URL)
2. Ensure the handle exists in MongoDB
3. Check if MongoDB connection is active
4. Look for 404 errors in browser console
5. Test API directly: `curl http://localhost:3000/yourhandle`

</details>

<details>
<summary><b>Styling or theme not working</b></summary>

1. Run `npm install` to ensure Tailwind is installed
2. Restart dev server: `npm run dev`
3. Clear browser cache (Ctrl+Shift+Delete)
4. Check if `globals.css` is imported in layout.js
5. Verify tailwind.config.js has correct content paths

</details>

---

<div align="center">

### Made with ❤️ by [Muzzu8421](https://github.com/Muzzu8421)

[⬆ Back to Top](#onelink)

</div>
