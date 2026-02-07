"use client";
import { FormEvent, useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Spinner } from "./ui/spinner";
import { toast } from "sonner";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);

    if (!form.current) {
      toast("Enter correct details");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey,
      })
      .then(() => {
        toast.success("Message sent successfully");
        form.current?.reset();
      })
      .catch(() => toast.error("Message could not be sent"))
      .finally(() => {
        setIsSending(false);
      });
  }
  return (
    <form
      ref={form}
      className="space-y-4 rounded-md border p-4"
      onSubmit={handleSubmit}
    >
      <p className="text-primary text-xl font-semibold">Send message</p>
      <div>
        <Label className="text-primary mb-2 block text-sm font-medium">
          Name
        </Label>
        <Input
          type="text"
          className="py-5 shadow-none placeholder:text-sm"
          name="name"
          disabled={isSending}
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label className="text-primary mb-2 block text-sm font-medium">
          Email
        </label>
        <Input
          type="email"
          name="email"
          disabled={isSending}
          className="py-5 shadow-none placeholder:text-sm"
          placeholder="your@example.com"
          required
        />
      </div>

      <div>
        <label className="text-primary mb-2 block text-sm font-medium">
          Message
        </label>
        <Textarea
          name="message"
          disabled={isSending}
          className="h-40 resize-none placeholder:text-sm"
          placeholder="Write your message..."
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full cursor-pointer py-5"
        disabled={isSending}
      >
        {isSending ? <Spinner /> : <span>Send Message</span>}
      </Button>
    </form>
  );
}
