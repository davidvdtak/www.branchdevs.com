"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/simpleselect";

import { Mail, MapPin, Send } from "lucide-react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import React from "react";

export function Contact() {
  const [message, setMessage] = React.useState<any>(null)

  const _validate = Yup.object().shape({    
    name: Yup.string().required("This field is required"),    
    email: Yup.string().email("Invalid Email").required("This field is required"),
    message: Yup.string().required("This field is required"),
  });

  const _onSubmit = async (values: { name?: string, email?: string, company?: string, service?: string, budget?: string, message?: string}) => {
    const { name, email, company, service, budget, message} = values;

    try {
      const res = await fetch("https://j2ge2su6pbmtc4eyz7irrbl6sm0qydke.lambda-url.us-east-1.on.aws/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, email, company, service, budget, message})
      });
      const data = await res.json();
      if(data.success){
        setMessage({msg: "Message sent, we will be in contact shortly!", success: true})
      }
    } catch(e) {
      setMessage({msg: "Error sending message, please try again!", success: false})
    };

    setTimeout(() => {
      setMessage(null);
    }, 5000);

  }

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
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Location</span>
                </CardTitle>
                <CardDescription>
                  We work with clients globally
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Remote-first team
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
                {message?.msg ? <p className={message.success ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>{message.msg}</p> : null}
                <Formik initialValues={{ name: "", email: "", company: "", service: "", budget: "", message: ""}} onSubmit={_onSubmit} validationSchema={_validate}>
                  {({ isSubmitting, errors, submitCount, values, handleChange }: any) => (
                    <Form noValidate autoComplete="off" className="flex flex-col gap-4"> 
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name">Name *</label>
                          <Input id="name" placeholder="Your name" value={values?.name} name="name" onChange={handleChange} />
                          {submitCount && errors.name ? <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.name}</p> : null}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email">Email *</label>
                          <Input id="email" type="email" placeholder="your@email.com" value={values?.email} name="email" onChange={handleChange} />
                          {submitCount && errors.email ? <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.email}</p> : null}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="company">Company</label>
                        <Input id="company" placeholder="Your company name" value={values?.company} name="company" onChange={handleChange}  />
                        {submitCount && errors.company ? <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.company}</p> : null}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="service">Service Needed</label>
                        <Select 
                          id="service"
                          name="service"
                          onChange={handleChange}
                        >
                          <option value="">Select a service</option>
                          <option value="website">Website Building</option>
                          <option value="integration">System Integration</option>
                          <option value="upgrade">Software Upgrade</option>
                          <option value="aws">AWS Infrastructure</option>
                          <option value="multiple">Multiple Services</option>
                        </Select>
                        {submitCount && errors.service ? <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.service}</p> : null}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="budget">Project Budget</label>
                        <Select 
                          id="budget"
                          name="budget"
                          onChange={handleChange}
                        >
                          <option value="">Select budget range</option>
                          <option value="5k-15k">$5k - $15k</option>
                          <option value="15k-30k">$15k - $30k</option>
                          <option value="30k-50k">$30k - $50k</option>
                          <option value="50k+">$50k+</option>
                        </Select>
                        {submitCount && errors.budget ? <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.budget}</p> : null}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message">Project Details *</label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          className="min-h-[120px]"
                          onChange={handleChange}
                        />
                        {submitCount && errors.message ? <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.message}</p> : null}
                      </div>

                      <Button type="submit" className="w-full group" disabled={isSubmitting}>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}