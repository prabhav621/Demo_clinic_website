import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BlurReveal } from "@/components/animations/BlurReveal";

export default function Home() {
  const testimonials = [
    {
      quote: "The care I received was exceptional. The doctors took their time to listen to my concerns and explained everything clearly. Truly a premium experience.",
      name: "Sarah Jenkins",
      title: "Cardiology Patient"
    },
    {
      quote: "From the moment you walk in, the environment is incredibly calming and professional. Booking an appointment was effortless.",
      name: "Michael Chen",
      title: "General Checkup"
    },
    {
      quote: "I highly recommend the diagnostic team. Fast results, crystal clear communication, and top-tier facilities.",
      name: "Emma Thompson",
      title: "Neurology Patient"
    },
    {
      quote: "The best medical clinic I have ever visited. The attention to detail and patient care is unmatched.",
      name: "David Wright",
      title: "Orthopedic Patient"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 xl:py-40 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
            {/* Abstract shape for background depth */}
            <div className="w-[800px] h-[800px] rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <BlurReveal>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4 max-w-4xl">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-primary">
                  Modern Healthcare
                  <br className="hidden sm:inline" /> for a Better Life
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pt-6 font-medium">
                  Experience world-class medical care with our expert team of specialists. We blend advanced technology with compassionate care to put your health first.
                </p>
              </div>
              <div className="space-x-4 pt-10">
                <Link href="/book">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg rounded-full shadow-lg">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="w-full py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto">
          <BlurReveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-primary-foreground/20">
              <div className="flex flex-col items-center justify-center pt-6 sm:pt-0">
                <h3 className="text-5xl font-bold tracking-tight mb-3">10k+</h3>
                <p className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-[0.2em]">Patients Served</p>
              </div>
              <div className="flex flex-col items-center justify-center pt-8 sm:pt-0">
                <h3 className="text-5xl font-bold tracking-tight mb-3">15+</h3>
                <p className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-[0.2em]">Expert Doctors</p>
              </div>
              <div className="flex flex-col items-center justify-center pt-8 sm:pt-0">
                <h3 className="text-5xl font-bold tracking-tight mb-3">98%</h3>
                <p className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-[0.2em]">Patient Satisfaction</p>
              </div>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="w-full py-24 md:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <BlurReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary">Patient Stories</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed font-medium">
                Real experiences from our valued patients.
              </p>
            </div>
          </BlurReveal>
          
          <BlurReveal delay={0.2}>
            <div className="w-full max-w-5xl mx-auto px-10">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent className="-ml-4">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="bg-secondary/20 border-none shadow-sm h-full">
                        <CardContent className="p-8 flex flex-col justify-between h-full">
                          <p className="text-muted-foreground italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
                          <div>
                            <h4 className="font-bold text-primary">{testimonial.name}</h4>
                            <p className="text-sm text-tertiary font-medium">{testimonial.title}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex border-none shadow-md" />
                <CarouselNext className="hidden md:flex border-none shadow-md" />
              </Carousel>
            </div>
          </BlurReveal>
        </div>
      </section>
    </div>
  );
}
