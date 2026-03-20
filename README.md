# 🏥 Clinique - Modern Medical Clinic Web App

![Clinique Hero Banner](https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000)

> A high-end, patient-first web application designed for modern medical clinics. Features a seamless appointment booking system, doctor directories, and an elegant, minimalist "Apple-esque" UI.

## ✨ Key Features

- **Premium Aesthetic**: Ultra-minimalist interface utilizing a "Deep Medical Blue" and "Soft Mint" color palette, enhanced with fluid scroll-reveals (Framer Motion) and subtle button micro-interactions.
- **Doctor Directory**: Dynamic doctor profile cards with real-time status availability badges.
- **Smart Appointment Booking**: Seamless booking integration with database-enforced double-booking prevention logic.
- **Contact Integration**: Secure patient inquiry contact forms wired directly to the backend.
- **Performant & SEO-ready**: Built on Next.js 14 App Router for rapid page loads and optimized search engine indexing.

## 🛠 Tech Stack

- **Frontend Core**: [Next.js 14](https://nextjs.org/) (React, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Hosting & Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

Ensure you have the following software installed on your machine:
- Node.js (v18 or higher)
- npm, yarn, or pnpm
- A Supabase account and active project

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prabhav621/Demo_clinic_website.git
   cd clinic-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add your Supabase connection strings:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Initialize the Database (Supabase):**
   Create the following tables in your Supabase SQL editor:
   - `appointments` (patient_name, doctor_name, appointment_date, appointment_time)
   - Add a `UNIQUE` constraint over `doctor_name`, `appointment_date`, and `appointment_time` to prevent double booking.
   - `contacts` (name, email, message)

5. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Deployment

This project is optimized for deployment on the Vercel Platform. 

1. Ensure your codebase is pushed to GitHub.
2. Import the project directly into Vercel.
3. Add the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to the Vercel project's Environment Variables.
4. Deploy!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
