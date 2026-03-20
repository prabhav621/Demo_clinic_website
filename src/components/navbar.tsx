import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold text-primary tracking-tight">Clinique</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:drop-shadow-md active:translate-y-0 active:scale-95 inline-block text-foreground/60">Home</Link>
          <Link href="/doctors" className="transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:drop-shadow-md active:translate-y-0 active:scale-95 inline-block text-foreground/60">Doctors</Link>
          <Link href="/contact" className="transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:drop-shadow-md active:translate-y-0 active:scale-95 inline-block text-foreground/60">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4 ml-auto">
          <Link href="/book">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Book Appointment</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
