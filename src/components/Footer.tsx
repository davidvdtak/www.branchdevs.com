import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={"/images/branchdevs-logo.png"} 
                alt="BranchDevs Logo" 
                className="h-8 w-8"
              />
              <span className="font-bold text-lg">BranchDevs</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Boutique software development agency specializing in custom solutions that grow with your business.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4>Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Website Building</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">System Integrations</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Software Upgrades</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">AWS Infrastructure</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4>Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              {/*<li><a href="#" className="hover:text-foreground transition-colors">Portfolio</a></li>*/}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4>Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@branchdevs.com" className="hover:text-foreground transition-colors">
                  hello@branchdevs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 BranchDevs. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">            
              <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</a>
            {/*
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            */}
          </div>
        </div>
      </div>
    </footer>
  );
}