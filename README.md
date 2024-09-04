# Eternal Elegance Emporium

Eternal Elegance Emporium is an e-commerce platform designed for selling pre-owned jewelry. This platform combines the power of Next.js, Bootstrap, Tailwind CSS, and Prisma to deliver a seamless and visually stunning shopping experience.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Environment Variables](#environment-variables)
5. [Installation](#installation)
6. [Running the Application](#running-the-application)
7. [Directory Structure](#directory-structure)
8. [Deployment](#deployment)
9. [Customization](#customization)

## Features

- **Product Listings**: Explore a wide range of pre-owned jewelry items, including rings, necklaces, bracelets, and more.
- **Advanced Search**: Use robust search and filtering options to find the perfect jewelry piece.
- **Responsive Design**: Optimized for all devices using Bootstrap and Tailwind CSS, with a color palette matching your brand.
- **Shopping Cart**: Add items to your cart and proceed to a secure checkout powered by Stripe.
- **User Authentication**: Secure login, registration, and account management.
- **Admin Dashboard**: Manage products, orders, and users with advanced analytics and graphs.
- **Stripe Integration**: Secure payment processing and financial management using Stripe.

## Tech Stack

- **Next.js**: Server-side rendering and static site generation framework for React.
- **React**: JavaScript library for building user interfaces.
- **Bootstrap**: Front-end component library for responsive, mobile-first sites.
- **Tailwind CSS**: Utility-first CSS framework for custom designs.
- **Prisma**: Modern database toolkit for TypeScript and Node.js.
- **PostgreSQL**: Relational database for storing all application data.
- **TypeScript**: Strongly-typed programming language that builds on JavaScript.
- **Stripe**: Online payment processing platform.

## Getting Started

### Prerequisites

Before you can set up the project, ensure that you have the following installed:

- **Node.js**: JavaScript runtime environment (v14.x or later)
- **npm**: Node package manager (comes with Node.js)
- **PostgreSQL**: Relational database management system

### Environment Variables

You'll need to set up a `.env.local` file with your environment-specific variables:

- `DATABASE_URL`: Connection string for your PostgreSQL database.
- `STRIPE_SECRET_KEY`: Your Stripe secret key for payment processing.
- `STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key for client-side interactions.
- `SITE_NAME`: The name of your site.
- `PRIMARY_COLOR`: The primary color used in your site's theme (e.g., `#B8860B`).
- `SECONDARY_COLOR`: The secondary color used in your site's theme (e.g., `#f4e8cd`).
- `TEXT_COLOR`: The default text color (e.g., `#4B3621`).

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/eternal-elegance-emporium.git
   cd eternal-elegance-emporium
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   This will install all required Node.js packages, including Next.js, React, Tailwind CSS, Bootstrap, and Prisma.

3. **Set up the database**:
   - Ensure PostgreSQL is running on your machine.
   - Update the `DATABASE_URL` in `.env.local` with your PostgreSQL credentials.
   - Run Prisma migrations to set up your database schema:
     ```bash
     npx prisma migrate dev --name init
     ```

4. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```
   This will generate the Prisma client for database interactions.

## Running the Application

To start the development server, run:



The application will be available at `http://localhost:3000`.

