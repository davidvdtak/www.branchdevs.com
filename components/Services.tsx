import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Code, Link, Zap, Cloud, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Website Building",
      description: "Custom web applications built with modern technologies and best practices.",
      features: [
        "React & Next.js development",
        "Responsive design implementation",
        "Performance optimization",
        "SEO-friendly architecture"
      ],
      image: "https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBlc2NyaXB0JTIwY29kZSUyMGVkaXRvciUyMHNjcmVlbnxlbnwxfHx8fDE3NTk4NTUwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Link className="h-8 w-8" />,
      title: "System Integrations",
      description: "Seamlessly connect your existing systems with new platforms and services.",
      features: [
        "E-commerce platform integration",
        "CRM system connections",
        "Payment gateway setup",
        "Third-party API integration"
      ],
      image: "https://images.unsplash.com/photo-1675044794023-2c70962f4899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGF0JTIwZGVzaWduJTIwbmV0d29yayUyMGNvbm5lY3Rpb25zJTIwbGlua3N8ZW58MXx8fHwxNzU5ODU0NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Software Upgrades",
      description: "Modernize your existing applications with the latest technologies and features.",
      features: [
        "Legacy system modernization",
        "Performance improvements",
        "Security updates",
        "Feature enhancements"
      ],
      image: "https://images.unsplash.com/photo-1675627452781-f228fa8f678c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGF0JTIwZGVzaWduJTIwc29mdHdhcmUlMjB1cGdyYWRlJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc1OTg1NDM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "AWS Cloud Infrastructure",
      description: "Scalable, secure, and cost-effective cloud solutions built on AWS.",
      features: [
        "Cloud migration services",
        "Auto-scaling infrastructure",
        "Security & compliance",
        "Cost optimization"
      ],
      image: "https://images.unsplash.com/photo-1627544263474-c0d0b646bac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGF0JTIwZGVzaWduJTIwY2xvdWQlMjBjb21wdXRpbmclMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU5ODU0MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive software development services to help your business grow and scale efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}