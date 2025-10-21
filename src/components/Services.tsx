import React from "react";
import { Globe, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Building responsive, performant web applications with modern frameworks and best practices.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Creating cross-platform mobile applications that deliver seamless user experiences.",
    },
  ];

  return (
    <section className="bg-background mx-auto w-full py-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-primary mb-4 text-4xl">Services</h2>
        <p className="text-muted-foreground mb-10">What I can help you build</p>

        <div className="flex flex-col gap-x-4 md:flex-row">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group border-input flex-1 cursor-pointer rounded-lg border p-4 transition-all duration-300"
              >
                <Icon
                  className="text-muted-foreground group-hover:text-primary mb-6 h-12 w-12 transition-colors duration-300"
                  strokeWidth={1.5}
                />
                <h3 className="text-primary mb-3 text-2xl font-semibold">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
