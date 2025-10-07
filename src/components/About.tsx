import { Card, CardContent } from "./ui/card";
import { Users, Award, Cloud, Lightbulb } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "20+",
      label: "Projects Completed"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "10+",
      label: "Years Experience"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      number: "AWS",
      label: "Cloud Support"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      number: "100%",
      label: "Custom Solutions"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                Growing businesses through
                <span className="text-primary block">smart technology</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                At BranchDevs, we believe that great software should grow with your business. 
                Our boutique approach means you get personalized attention and custom solutions 
                tailored to your specific needs.
              </p>
            </div>

            <div className="space-y-4">
              <h3>Why Choose BranchDevs?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong>Boutique Experience:</strong> Direct access to senior developers, not junior staff or outsourced teams.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong>Modern Technology:</strong> We use the latest tools and frameworks to build future-proof solutions.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong>End-to-End Service:</strong> From initial consultation to ongoing maintenance and upgrades.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong>AWS Expertise:</strong> Certified cloud architects ensuring scalable and secure infrastructure.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="text-primary mx-auto">
                    {stat.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}