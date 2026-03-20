import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30 mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-xl font-bold text-primary tracking-tight">Clinique</Link>
          <p className="text-sm text-muted-foreground tracking-tight mt-2">Modern Healthcare for a Better Life</p>
        </div>
        <div className="flex space-x-6 text-sm font-medium text-muted-foreground">
          <Link href="/" className="transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:drop-shadow-md active:translate-y-0 active:scale-95 inline-block">Home</Link>
          <Link href="/doctors" className="transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:drop-shadow-md active:translate-y-0 active:scale-95 inline-block">Doctors</Link>
          <Link href="/contact" className="transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:drop-shadow-md active:translate-y-0 active:scale-95 inline-block">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
