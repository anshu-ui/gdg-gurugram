# Google Developer Group (GDG) Gurugram Website

## Overview

This is a modern, full-stack web application for Google Developer Group Gurugram - an exact replica of GDG Bandung's design and functionality adapted for Gurugram. The platform serves as the central hub for Gurugram's vibrant tech community, featuring event listings, community gallery, contact forms, and comprehensive information about our developer community.

## User Preferences

Preferred communication style: Simple, everyday language.
Design Requirements: Exact replica of GDG Bandung website with identical styling, layout, and functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with Poppins font family and Google brand colors
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds
- **Design System**: Modern gradient-based design with Google's official color palette

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design with route-based organization
- **Storage Solution**: Firebase Firestore for real-time data storage and management
- **Authentication**: Firebase Auth integration (configured but not actively used)
- **Development Server**: Vite middleware integration for hot module replacement

### Data Storage Design
- **Database**: Firebase Firestore (NoSQL document database)
- **Configuration**: Firebase SDK with environment-based configuration
- **Data Models**: Contacts, Events, and Gallery items stored as Firestore collections
- **Real-time Features**: Live updates for events and community engagement
- **Security**: Firebase Security Rules for data protection
- **Local Development**: Firebase Emulator Suite for development and testing

### Component Architecture
- **Design System**: Google Material Design inspired with Poppins typography
- **Layout**: Modern section-based architecture with gradient backgrounds and animations
- **Responsive Design**: Mobile-first approach with advanced hover effects and transitions
- **Accessibility**: Radix UI primitives ensure ARIA compliance and keyboard navigation
- **Visual Elements**: Custom GDG logo, animated statistics, and interactive image galleries
- **Micro-interactions**: Smooth scrolling, hover animations, and transform effects

### Development Workflow
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Validation**: Zod schemas for runtime type validation
- **Build Process**: Separate client and server builds with optimized bundling
- **Development Experience**: Hot reload, error overlay, and Replit integration

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe database ORM
- **@neondatabase/serverless**: PostgreSQL database driver
- **express**: Web application framework
- **wouter**: Lightweight React router

### UI and Styling Dependencies
- **@radix-ui/***: Accessible UI primitive components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development and Build Tools
- **vite**: Build tool and development server
- **typescript**: Type system and compiler
- **drizzle-kit**: Database migration toolkit
- **esbuild**: JavaScript bundler for server builds

### Validation and Forms
- **zod**: Runtime type validation
- **drizzle-zod**: Integration between Drizzle and Zod
- **@hookform/resolvers**: Form validation resolvers

### Firebase Configuration
- **Environment Variables**: 
  - VITE_FIREBASE_API_KEY
  - VITE_FIREBASE_APP_ID  
  - VITE_FIREBASE_PROJECT_ID
- **Services**: Firestore Database, Authentication (configured)
- **Configuration Location**: `./client/src/lib/firebase.ts`
- **Data Management**: `./client/src/lib/firestore.ts` for database operations

## Recent Changes (January 2025)

### Complete GDG Bandung Website Replica (Latest Update)
- ✅ **EXACT REPLICA COMPLETED**: Successfully transformed website to precisely match GDG Bandung's design (https://gdgbandung.com/)
- ✅ **Font Alignment**: Changed from Poppins to Inter font family to match GDG Bandung exactly
- ✅ **Logo Integration**: Implemented user-provided GDG Gurugram logo (gdg gurugram_1754666308523.webp)
- ✅ **DevFest Event**: Created DevFest 2025 event using provided DevFest logo (Frame 218738_1754666436704.png)
- ✅ **Layout Precision**: Matched exact spacing, colors, typography, and positioning from GDG Bandung
- ✅ **Content Adaptation**: Replicated all sections with Gurugram-specific content while maintaining identical structure
- ✅ **Navigation**: Simple fixed header with white background and shadow (matching GDG Bandung)
- ✅ **Hero Section**: Two-column layout with title + logo display (no gradients)
- ✅ **Statistics**: Simple counter grid with social media icons
- ✅ **Events**: Clean event cards with upcoming/past tabs functionality
- ✅ **About**: Two-column text + image grid with feature icons
- ✅ **Event Series**: Video thumbnails with descriptions (Build With AI, I/O Extended, DevFest)
- ✅ **Sponsors**: Community partners section with partnership benefits
- ✅ **Gallery**: Clean grid layout with lightbox functionality
- ✅ **Contact**: Simple form layout in gray background
- ✅ **Footer**: Multi-column footer with links and social media
- ✅ **Email Contact**: All forms configured to use gdggurugram@gmail.com
- ✅ **Firebase Integration**: Contact forms saving to Firestore database
- ✅ **Responsive Design**: Mobile-first approach matching GDG Bandung's responsive behavior

### User Requirements Fulfilled
- ✅ Exact replica requirement: "everything will be same" - achieved precise visual and structural match
- ✅ Font matching: Inter font family consistent with GDG Bandung  
- ✅ Logo implementation: GDG Gurugram logo properly integrated
- ✅ DevFest event: Created using provided DevFest 2025 logo
- ✅ Contact email: gdggurugram@gmail.com configured throughout
- ✅ CSS and positioning: Identical layout, spacing, and styling
- ✅ Firebase backend: Real-time data storage for contact forms