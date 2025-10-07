import { Button } from "./ui/button";
import { ArrowRight, Code, Cloud, Zap, Link } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Tree Image - Top Left Portion Only */}
      <div className="absolute top-0 right-0 h-full w-1/2 overflow-hidden">
        <img 
          src={"/images/branchdevs-logo.svg"} 
          alt="BranchDevs Tree" 
          className="h-full w-auto min-w-full object-cover object-top-left scale-150 translate-x-[50px]"
        />
        {/* Gradient overlay to blend with background */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Software that
                <span className="text-primary block">grows with you</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                We build robust software solutions, seamless integrations, and scalable cloud infrastructure for growing businesses.
              </p>
            </div>

            {/* Service Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-primary" />
                <span>Website Building</span>
              </div>
              <div className="flex items-center space-x-2">
                <Link className="h-5 w-5 text-primary" />
                <span>System Integrations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Software Upgrades</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cloud className="h-5 w-5 text-primary" />
                <span>AWS Infrastructure</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}