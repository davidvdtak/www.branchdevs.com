import React, { useEffect } from "react";
import Page, { PageInner } from "../../components/Page";
import theme from "src/theme";

const Resume = () =>{

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME + " | Resume"        
  },[])

  return (    
    <Page>  
      <PageInner>
        <div className="container">
          <h2 className="mb-4">Work Experience</h2>
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
        </div>    
      </PageInner>        
      <PageInner
        styles={{background: theme.colors.base_500, color: theme.colors.base_100}}
      >
        <div className="container pb-4">
          <h2 className="mb-4 text-center">Skills</h2>    
          <div className="d-flex flex-wrap gap-4 fs-4 justify-content-center align-items-center">          
            <span className="badge bg-primary">Node.js</span>
            <span className="badge bg-primary">TypeScript</span>
            <span className="badge bg-primary">React</span>
            <span className="badge bg-primary">NestJS</span>
            <span className="badge bg-primary">NextJS</span>          
            <span className="badge bg-primary">PHP</span> 
            <span className="badge bg-primary">PHP Laravel</span>         
            <span className="badge bg-primary">WordPress</span>                    
            <span className="badge bg-primary">jQuery</span>          
            <span className="badge bg-primary">CSS</span>
            <span className="badge bg-primary">MySQL</span>
            <span className="badge bg-primary">AJAX</span>
            <span className="badge bg-primary">HTML5</span>          
            <span className="badge bg-primary">CSS</span>
            <span className="badge bg-primary">Javascript</span>
            <span className="badge bg-primary">Bootstrap</span>
            <span className="badge bg-primary">JavaScript</span>
            <span className="badge bg-primary">APIs</span>          
            <span className="badge bg-primary">JSON</span>                              
            <span className="badge bg-primary">REST</span>          
            <span className="badge bg-primary">Git</span>          
          </div>
        </div>
        <div className="container pt-4">
          <h2 className="mb-4 text-center">Selection of API integrations</h2>    
          <div className="d-flex flex-wrap gap-4 fs-4 justify-content-center align-items-center"> 
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
      </PageInner>   
    </Page>    
  );            
};

export default Resume;