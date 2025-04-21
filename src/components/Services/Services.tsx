import React from "react";
import "./Services.css";
import { FaPlay } from "react-icons/fa";

const services = [
    {
      title: "Building Development",
      description:
        "We handle all aspects of building development, ensuring structures meet modern standards and client expectations.",
    },
    {
      title: "Aluminum Windows: Design, Fabrication & Installation",
      description:
        "Our team delivers sleek, durable aluminum window solutions tailored to both aesthetics and functionality.",
    },
    {
      title: "Office Partitions and Blinds: Design & Installation",
      description:
        "Transform workspaces with customized office partitions and blinds that blend privacy with style.",
    },
    {
      title: "Electrical Installations",
      description:
        "From wiring to full-scale systems, our certified professionals provide safe and efficient electrical installation services.",
    },
    {
      title: "Mechanical & Civil Maintenance Works",
      description:
        "We offer reliable maintenance solutions across mechanical and civil sectors, minimizing downtime and boosting performance.",
    },
    {
      title: "Painting Services & POP (Plaster of Paris)",
      description:
        "Add beauty and finish to interiors with our expert painting and elegant POP designs for walls and ceilings.",
    },
    {
      title: "Stainless Steel Handrails & Laser Cut Designs",
      description:
        "Enhance safety and design with our premium stainless steel handrails and custom laser-cut boards and sheets.",
    },
    {
      title: "Security Wire Fencing & Camera Installation",
      description:
        "Ensure property safety with our integrated solutions for security wire fencing and surveillance camera setup.",
    },
    {
      title: "Window Blinds & Solar Street Lighting",
      description:
        "We supply and install elegant window blinds and energy-efficient solar street lights for modern spaces.",
    },
  ];
  

const Services = () => {
  return (
    <section className="services-section">
      <h2>SERVICES</h2>
      <div className="divider" />
      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <div className="service-title">
              <h3>{service.title}</h3>
              <FaPlay className="icon" />
            </div>
            <p>{service.description}</p>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
