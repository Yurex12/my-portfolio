"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    console.log(e.preventDefault());
  }
  return (
    <form className="space-y-4 rounded-md border p-4" onSubmit={handleSubmit}>
      <div>
        <label className="text-primary mb-2 block text-sm font-medium">
          Name
        </label>
        <Input
          type="text"
          className="py-5 shadow-none placeholder:text-sm"
          name="name"
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
          className="h-40 resize-none placeholder:text-sm"
          placeholder="Write your message..."
          required
        />
      </div>

      <Button type="submit" className="w-full py-5">
        Send Message
      </Button>
    </form>
  );
}
