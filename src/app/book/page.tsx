"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/lib/supabase";
import { BlurReveal } from "@/components/animations/BlurReveal";

function BookAppointmentForm() {
  const searchParams = useSearchParams();
  const preselectedDoctor = searchParams.get("doctor");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<{
    patient_name: string;
    doctor_name: string;
    appointment_date: string;
    appointment_time: string;
  }>({
    patient_name: "",
    doctor_name: preselectedDoctor || "",
    appointment_date: "",
    appointment_time: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    if (!formData.patient_name || !formData.doctor_name || !formData.appointment_date || !formData.appointment_time) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const { data, error: sbError } = await supabase
        .from('appointments')
        .insert([
          {
            patient_name: formData.patient_name,
            doctor_name: formData.doctor_name,
            appointment_date: formData.appointment_date,
            appointment_time: formData.appointment_time,
          }
        ]);

      if (sbError) {
        if (sbError.code === '23505') {
          // Unique violation
          setError("This time slot is already booked for this doctor. Please select another time or doctor.");
        } else {
          setError(sbError.message);
        }
      } else {
        setSuccess(true);
        setFormData({ patient_name: "", doctor_name: "", appointment_date: "", appointment_time: "" });
      }
    } catch (err: any) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardContent className="space-y-8 pt-8 px-8">
        {error && (
          <div className="p-4 bg-destructive/10 text-destructive text-sm rounded-lg font-medium border border-destructive/20">
            {error}
          </div>
        )}
        
        {success && (
          <div className="p-4 bg-primary/10 text-primary text-sm rounded-lg font-medium border border-primary/20">
            Your appointment has been successfully booked! We will contact you shortly.
          </div>
        )}

        <div className="space-y-3">
          <Label htmlFor="patient_name" className="text-primary font-semibold text-base">Full Name</Label>
          <Input 
            id="patient_name" 
            placeholder="John Doe" 
            className="h-14 bg-secondary/50 border-none rounded-xl text-base px-4 font-medium focus-visible:ring-primary/50" 
            value={formData.patient_name}
            onChange={(e) => setFormData({ ...formData, patient_name: e.target.value })}
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="doctor_name" className="text-primary font-semibold text-base">Select Specialist</Label>
          <Select value={formData.doctor_name} onValueChange={(val) => setFormData({ ...formData, doctor_name: val || "" })}>
            <SelectTrigger className="h-14 bg-secondary/50 border-none rounded-xl text-base px-4 font-medium focus-visible:ring-primary/50">
              <SelectValue placeholder="Choose a specialist" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-none shadow-xl">
              <SelectItem value="Dr. Eleanor Vance">Dr. Eleanor Vance - Cardiology</SelectItem>
              <SelectItem value="Dr. Marcus Chen">Dr. Marcus Chen - Neurology</SelectItem>
              <SelectItem value="Dr. Sarah Jenkins">Dr. Sarah Jenkins - Pediatrics</SelectItem>
              <SelectItem value="Dr. Robert Smith">Dr. Robert Smith - Orthopedics</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="appointment_date" className="text-primary font-semibold text-base">Select Date</Label>
            <Input 
              id="appointment_date" 
              type="date" 
              className="h-14 bg-secondary/50 border-none rounded-xl text-base px-4 font-medium focus-visible:ring-primary/50 text-muted-foreground" 
              value={formData.appointment_date}
              onChange={(e) => setFormData({ ...formData, appointment_date: e.target.value })}
            />
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="appointment_time" className="text-primary font-semibold text-base">Select Time</Label>
            <Select value={formData.appointment_time} onValueChange={(val) => setFormData({ ...formData, appointment_time: val || "" })}>
              <SelectTrigger className="h-14 bg-secondary/50 border-none rounded-xl text-base px-4 font-medium focus-visible:ring-primary/50">
                <SelectValue placeholder="Choose a time slot" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-none shadow-xl">
                <SelectItem value="09:00">09:00 AM</SelectItem>
                <SelectItem value="10:00">10:00 AM</SelectItem>
                <SelectItem value="11:00">11:00 AM</SelectItem>
                <SelectItem value="13:00">01:00 PM</SelectItem>
                <SelectItem value="14:00">02:00 PM</SelectItem>
                <SelectItem value="15:00">03:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-8 pb-10 pt-4">
        <Button disabled={loading} type="submit" className="w-full h-16 text-lg rounded-full font-bold shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]">
          {loading ? "Confirming..." : "Confirm Appointment"}
        </Button>
      </CardFooter>
    </form>
  );
}

export default function BookAppointmentPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">
      <BlurReveal>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary">Book Appointment</h1>
          <p className="text-muted-foreground md:text-xl font-medium">
            Schedule a consultation with our experts.
          </p>
        </div>
      </BlurReveal>

      <BlurReveal delay={0.2}>
        <Card className="border-none shadow-xl bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
          <CardHeader className="space-y-1 bg-secondary/30 pb-8 pt-8 px-8">
            <CardTitle className="text-2xl text-primary font-bold">Appointment Details</CardTitle>
            <CardDescription className="text-base">
              Please fill in your information to schedule your visit.
            </CardDescription>
          </CardHeader>
          <Suspense fallback={<div className="p-8 text-center text-muted-foreground font-medium text-lg">Loading booking form...</div>}>
            <BookAppointmentForm />
          </Suspense>
        </Card>
      </BlurReveal>
    </div>
  );
}
