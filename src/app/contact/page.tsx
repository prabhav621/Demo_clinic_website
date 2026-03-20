"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { BlurReveal } from "@/components/animations/BlurReveal";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const { error: sbError } = await supabase.from('contacts').insert([formData]);
      if (sbError) throw sbError;
      
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      <BlurReveal>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-primary">Get in Touch</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl font-medium">
            We’re here to help. Reach out to us with any questions or concerns.
          </p>
        </div>
      </BlurReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Information & Map */}
        <BlurReveal delay={0.1}>
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-secondary rounded-full text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Visit Us</h3>
                  <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                    123 Wellness Avenue<br />
                    Medical District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-secondary rounded-full text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Call Us</h3>
                  <p className="text-muted-foreground font-medium text-lg">
                    +1 (555) 123-4567<br />
                    Mon-Fri, 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-secondary rounded-full text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Email Us</h3>
                  <p className="text-muted-foreground font-medium text-lg">
                    contact@clinique.example.com<br />
                    support@clinique.example.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-[300px] bg-secondary/50 rounded-3xl overflow-hidden relative border border-secondary shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center hover:scale-105 transition-transform duration-500">
                <p className="text-muted-foreground font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Interactive Map Placeholder
                </p>
              </div>
            </div>
          </div>
        </BlurReveal>

        {/* Contact Form */}
        <BlurReveal delay={0.2}>
          <Card className="border-none shadow-xl bg-white rounded-3xl p-2 md:p-6 lg:p-8 hover:shadow-2xl transition-shadow duration-500">
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-8 pt-6">
                {error && (
                  <div className="p-4 bg-destructive/10 text-destructive text-sm rounded-lg font-medium border border-destructive/20">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="p-4 bg-primary/10 text-primary text-sm rounded-lg font-medium border border-primary/20">
                    Thank you! Your message has been sent successfully. We will get back to you shortly.
                  </div>
                )}

                <div className="space-y-3">
                  <Label htmlFor="name" className="text-primary font-semibold text-base">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="John Doe" 
                    className="h-14 bg-secondary/50 border-none rounded-xl text-base px-5 focus-visible:ring-primary/50 transition-colors hover:bg-secondary/70" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-primary font-semibold text-base">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="john@example.com" 
                    className="h-14 bg-secondary/50 border-none rounded-xl text-base px-5 focus-visible:ring-primary/50 transition-colors hover:bg-secondary/70" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-primary font-semibold text-base">Your Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="How can we help you today?" 
                    className="min-h-[180px] bg-secondary/50 border-none rounded-xl text-base p-5 focus-visible:ring-primary/50 resize-none transition-colors hover:bg-secondary/70" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button disabled={loading} type="submit" className="w-full h-16 rounded-full text-lg shadow-lg font-bold mt-4">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </CardContent>
            </form>
          </Card>
        </BlurReveal>
      </div>
    </div>
  );
}
