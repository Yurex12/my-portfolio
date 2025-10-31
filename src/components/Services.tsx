import React from "react";
import { Globe, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Application",
      description:
        "Building responsive, performant web applications with modern frameworks and best practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile Application",
      description:
        "Creating cross-platform mobile applications that deliver seamless user experiences.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-2 px-6 md:px-0">
      <h2 className="text-2xl sm:text-3xl">Services</h2>
      <p className="text-muted-foreground">What I can help you build</p>

      <div className="flex flex-col gap-4 md:flex-row">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="group border-input flex-1 cursor-pointer rounded-lg border p-4 transition-all duration-300"
            >
              <Icon
                className="text-primary mb-6 h-12 w-12 transition-colors duration-300"
                strokeWidth={1.5}
              />
              <h3 className="text-primary mb-3 text-xl font-semibold">
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
  );
};

export default Services;
