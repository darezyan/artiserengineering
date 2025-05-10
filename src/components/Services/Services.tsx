import {
  FaBuilding,
  FaWindows,
  FaWarehouse,
  FaBolt,
  FaTools,
  FaPaintRoller,
  FaRulerCombined,
  FaShieldAlt,
  FaSun,
} from "react-icons/fa";
import "./Services.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Building Development",
    icon: <FaBuilding />,
    description:
      "We handle all aspects of building development, ensuring structures meet modern standards and client expectations.",
  },
  {
    title: "Aluminum Windows: Design, Fabrication & Installation",
    icon: <FaWindows />,
    description:
      "Our team delivers sleek, durable aluminum window solutions tailored to both aesthetics and functionality.",
  },
  {
    title: "Office Partitions and Blinds: Design & Installation",
    icon: <FaWarehouse />,
    description:
      "Transform workspaces with customized office partitions and blinds that blend privacy with style.",
  },
  {
    title: "Electrical Installations",
    icon: <FaBolt />,
    description:
      "From wiring to full-scale systems, our certified professionals provide safe and efficient electrical installation services.",
  },
  {
    title: "Mechanical & Civil Maintenance Works",
    icon: <FaTools />,
    description:
      "We offer reliable maintenance solutions across mechanical and civil sectors, minimizing downtime and boosting performance.",
  },
  {
    title: "Painting Services & POP (Plaster of Paris)",
    icon: <FaPaintRoller />,
    description:
      "Add beauty and finish to interiors with our expert painting and elegant POP designs for walls and ceilings.",
  },
  {
    title: "Stainless Steel Handrails & Laser Cut Designs",
    icon: <FaRulerCombined />,
    description:
      "Enhance safety and design with our premium stainless steel handrails and custom laser-cut boards and sheets.",
  },
  {
    title: "Security Wire Fencing & Camera Installation",
    icon: <FaShieldAlt />,
    description:
      "Ensure property safety with our integrated solutions for security wire fencing and surveillance camera setup.",
  },
  {
    title: "Window Blinds & Solar Street Lighting",
    icon: <FaSun />,
    description:
      "We supply and install elegant window blinds and energy-efficient solar street lights for modern spaces.",
  },
];

// Animation directions
const flyDirections = ["left", "right", "up", "down"];

const flyInVariants = {
  hidden: (direction: string) => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -150 };
      case "right":
        return { opacity: 0, x: 150 };
      case "up":
        return { opacity: 0, y: -150 };
      case "down":
        return { opacity: 0, y: 150 };
      default:
        return { opacity: 0 };
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <section className="services-section">
      <h2>SERVICES</h2>
      <div className="divider" />
      <div className="services-grid">
        {services.map((service, idx) => {
          const direction = flyDirections[idx % flyDirections.length];
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.div
              ref={ref}
              key={idx}
              className="service-card"
              custom={direction}
              variants={flyInVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="service-title">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              <hr />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
