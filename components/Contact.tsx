import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Let's Build Something Great</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with custom software? Let's discuss your project and explore how we can help you grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Email Us</span>
                </CardTitle>
                <CardDescription>
                  Get in touch for project inquiries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:hello@branchdevs.com" className="text-primary hover:underline">
                  hello@branchdevs.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Call Us</span>
                </CardTitle>
                <CardDescription>
                  Speak directly with our team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="tel:+1234567890" className="text-primary hover:underline">
                  +1 (234) 567-8900
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Location</span>
                </CardTitle>
                <CardDescription>
                  We work with clients globally
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Remote-first team<br />
                  Available worldwide
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Start Your Project</CardTitle>
                <CardDescription>
                  Tell us about your project and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name">Name *</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email">Email *</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company">Company</label>
                  <Input id="company" placeholder="Your company name" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service">Service Needed</label>
                  <select 
                    id="service"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a service</option>
                    <option value="website">Website Building</option>
                    <option value="integration">System Integration</option>
                    <option value="upgrade">Software Upgrade</option>
                    <option value="aws">AWS Infrastructure</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget">Project Budget</label>
                  <select 
                    id="budget"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-15k">$5k - $15k</option>
                    <option value="15k-30k">$15k - $30k</option>
                    <option value="30k-50k">$30k - $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message">Project Details *</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}