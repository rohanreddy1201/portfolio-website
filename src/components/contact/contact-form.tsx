"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/manjjwan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormStatus("success");
      toast({
        title: "Message sent!",
        description: "Thanks for your message. I’ll get back to you soon.",
      });
      reset();
    } catch (error) {
      setFormStatus("error");
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {formStatus === "success" && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertTitle>Message Sent Successfully!</AlertTitle>
          <AlertDescription>
            Thank you for your message. I&apos;ll get back to you as soon as
            possible.
          </AlertDescription>
        </Alert>
      )}

      {formStatus === "error" && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Failed to Send Message</AlertTitle>
          <AlertDescription>
            Please try again. Or contact me directly at{" "}
            <a
              href="mailto:your@email.com"
              className="underline hover:text-red-400"
            >
              your@email.com
            </a>
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            {...register("name", { required: "Name is required" })}
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            disabled={isSubmitting}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...register("email", { required: "Email is required" })}
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            disabled={isSubmitting}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Your message..."
            {...register("message", { required: "Message is required" })}
            aria-describedby={errors.message ? "message-error" : undefined}
            aria-invalid={!!errors.message}
            disabled={isSubmitting}
            rows={5}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
}
