import React, { useEffect } from "react";

import Page from "../../components/Page";

const Resume = () =>{

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME + " | Resume"        
  },[])

  return (    
    <Page>  
      <div className="container">
        <h2>Work Experience</h2>
        <div className="blockquote">
          <h3 className="text-primary">Lead Developer / Chief Development Officer</h3>
          <h5 className="text-secondary">Zaronology Inc, October 2020 to Present</h5>
          <p>Working on multiple projects for a diverse range of clients. Projects ranged from custom e-commerce sites, reporting dashboards, to building bridges to connect different services together.</p>
          <p>Build in Laravel PHP framework/React/NestJS (Typescript framework)</p>
        </div>
        <hr />
        <div className="blockquote">
          <h3 className="text-primary">Technical Officer</h3>
          <h5 className="text-secondary">iEvents.com, February 2015 to March 2020</h5>
          <p>Started out by managing content on multiple static html sites. I quickly transitioned the websites to WordPress for easier content management. To control event listings from one place, I built a proprietary backend solution from the ground up with PHP/Laravel Framework (EMS; Event Management System).</p>
          <p>This system grew over the years and development never stopped. More services, systems and reporting for all departments where added by integrating external API’s and building custom solutions. The last two years I worked on a custom API to connect websites and apps.</p>
        </div>
        <hr />
        <div className="blockquote">
          <h3 className="text-primary">Web Developer</h3>
          <h5 className="text-secondary">IQ Leads, October 2012 to February 2015</h5>
          <p>Developing custom websites within WordPress or Custom PHP Sites. Building connections via API’s and Social Media platforms. Experience with customizing WooCommerce for WordPress. Making sure that all sites were SEO proof.</p>
        </div> 
        <hr /><hr />  
        <h2>Skills</h2>    
        <div className="d-flex flex-wrap gap-4 fs-4">          
          <span className="badge bg-primary">Node.js <small className="badge text-bg-light">(3 years)</small></span>
          <span className="badge bg-primary">TypeScript <small className="badge text-bg-light">(3 years)</small></span>
          <span className="badge bg-primary">React <small className="badge text-bg-light">(3 years)</small></span>
          <span className="badge bg-primary">NestJS <small className="badge text-bg-light">(1 year)</small></span>
          <span className="badge bg-primary">NextJS <small className="badge text-bg-light">(1 year)</small></span>          
          <span className="badge bg-primary">PHP <small className="badge text-bg-light">(11 years)</small></span> 
          <span className="badge bg-primary">PHP Laravel <small className="badge text-bg-light">(5 years)</small></span>         
          <span className="badge bg-primary">WordPress <small className="badge text-bg-light">(11 years)</small></span>                    
          <span className="badge bg-primary">jQuery <small className="badge text-bg-light">(11 years)</small></span>          
          <span className="badge bg-primary">CSS <small className="badge text-bg-light">(11 years)</small></span>
          <span className="badge bg-primary">MySQL <small className="badge text-bg-light">(11 years)</small></span>
          <span className="badge bg-primary">AJAX <small className="badge text-bg-light">(11 years)</small></span>
          <span className="badge bg-primary">HTML5 <small className="badge text-bg-light">(11 years)</small></span>          
          <span className="badge bg-primary">CSS <small className="badge text-bg-light">(11 years)</small></span>
          <span className="badge bg-primary">Javascript <small className="badge text-bg-light">(11 years)</small></span>
          <span className="badge bg-primary">Bootstrap <small className="badge text-bg-light">(10 years)</small></span>
          <span className="badge bg-primary">JavaScript <small className="badge text-bg-light">(8 years)</small></span>
          <span className="badge bg-primary">APIs <small className="badge text-bg-light">(8 years)</small></span>          
          <span className="badge bg-primary">JSON <small className="badge text-bg-light">(8 years)</small></span>                              
          <span className="badge bg-primary">REST <small className="badge text-bg-light">(8 years)</small></span>          
          <span className="badge bg-primary">Git <small className="badge text-bg-light">(8 years)</small></span>          
        </div>
        <hr /><hr />
        <h2>Selection of API integrations</h2>    
        <div className="d-flex flex-wrap gap-4 fs-4"> 
          <span className="badge bg-secondary">Stripe</span>
          <span className="badge bg-secondary">PayPal</span>
          <span className="badge bg-secondary">Shopify</span>
          <span className="badge bg-secondary">Konnektive</span>
          <span className="badge bg-secondary">Sticky.io</span>
          <span className="badge bg-secondary">Everflow</span>
          <span className="badge bg-secondary">Facebook</span>
          <span className="badge bg-secondary">Calendly</span>
          <span className="badge bg-secondary">HubSpot</span>
          <span className="badge bg-secondary">TicketSocket</span>
          <span className="badge bg-secondary">Eventbrite</span>
          <span className="badge bg-secondary">Jira</span>
          <span className="badge bg-secondary">Slack</span>          
        </div>
      </div>      
    </Page>    
  );            
};

export default Resume;