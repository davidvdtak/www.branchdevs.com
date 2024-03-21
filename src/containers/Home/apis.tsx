import React from "react";
import { motion } from "framer-motion";

const Badge = ({ children } :  {children: any}) => {
  return (
    <motion.span
      className="badge"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      {children}      
    </motion.span>
  );
}

const Apis = () => {
  return (
    <div className="badgeWrap">          
      <Badge>Stripe</Badge>
      <Badge>PayPal</Badge>
      <Badge>Shopify</Badge>
      <Badge>Konnektive</Badge>
      <Badge>Sticky.io</Badge>
      <Badge>Everflow</Badge>
      <Badge>Facebook</Badge>
      <Badge>Calendly</Badge>
      <Badge>HubSpot</Badge>
      <Badge>TicketSocket</Badge>
      <Badge>Eventbrite</Badge>
      <Badge>Jira</Badge>
      <Badge>Slack</Badge>         
    </div>
  )
};



export default Apis;