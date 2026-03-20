import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BlurReveal } from "@/components/animations/BlurReveal";

const doctors = [
  {
    id: 1,
    name: "Dr. Eleanor Vance",
    specialty: "Cardiologist",
    experience: "15+ Years",
    status: "Available",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 2,
    name: "Dr. Marcus Chen",
    specialty: "Neurologist",
    experience: "12+ Years",
    status: "In Surgery",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 3,
    name: "Dr. Sarah Jenkins",
    specialty: "Pediatrician",
    experience: "8+ Years",
    status: "Available",
    image: "https://images.unsplash.com/photo-1594824436998-058a231161a6?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 4,
    name: "Dr. Robert Smith",
    specialty: "Orthopedics",
    experience: "20+ Years",
    status: "Consulting",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
  },
];

export default function DoctorsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
      <BlurReveal>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-primary">Our Medical Experts</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl font-medium">
            Dedicated professionals committed to your health and well-being.
          </p>
        </div>
      </BlurReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor, index) => (
          <BlurReveal key={doctor.id} delay={index * 0.1} className="h-full">
            <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
              <div className="relative h-72 w-full bg-secondary overflow-hidden shrink-0">
                {/* Note: Using standard img tag for external urls to avoid next.config.js domain errors */}
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-primary leading-tight">{doctor.name}</h3>
                    <p className="text-muted-foreground font-medium mt-1">{doctor.specialty}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto mb-6 pt-6">
                  <span className="text-sm text-muted-foreground font-semibold">{doctor.experience}</span>
                  <Badge variant={doctor.status === "Available" ? "default" : "secondary"} className={doctor.status === "Available" ? "bg-primary text-white" : ""}>
                    {doctor.status}
                  </Badge>
                </div>
                <div className="mt-auto">
                  <Link href={`/book?doctor=${encodeURIComponent(doctor.name)}`}>
                    <Button className="w-full h-12 rounded-full shadow-lg" variant="outline">Book Consultation</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </BlurReveal>
        ))}
      </div>
    </div>
  );
}
