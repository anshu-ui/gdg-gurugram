# Google Developer Group (GDG) Gurugram Website

## Overview

This is a full-stack web application for Google Developer Group Gurugram, a community website designed to showcase events, connect developers, and facilitate community engagement. The platform serves as a central hub for the tech community in Gurugram, featuring event listings, photo galleries, contact forms, and community information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom Google brand colors and design system
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design with route-based organization
- **Storage Interface**: Abstract storage layer with in-memory implementation (designed for database integration)
- **Development Server**: Vite middleware integration for hot module replacement

### Data Storage Design
- **ORM**: Drizzle ORM with PostgreSQL dialect configuration
- **Schema Management**: Centralized schema definitions in shared directory
- **Migration System**: Drizzle Kit for database migrations
- **Current Implementation**: In-memory storage with interface designed for PostgreSQL migration
- **Data Models**: Users and Contacts with proper validation schemas

### Component Architecture
- **Design System**: Custom Google-themed design tokens and color palette
- **Layout**: Section-based architecture with reusable UI components
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI primitives ensure ARIA compliance and keyboard navigation

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

### Database Configuration
- **Environment**: Requires DATABASE_URL environment variable
- **Dialect**: PostgreSQL with serverless driver support
- **Schema Location**: `./shared/schema.ts`
- **Migrations**: Output to `./migrations` directory