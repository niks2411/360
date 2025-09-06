import React from "react";
import { FocusCards } from "./ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Technology",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: [
        "Website Design & Development",
        "SEO & Performance Optimization",
        "Automation & Tech Solutions"
      ]
    },
    {
      title: "Media & Design",
      src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: [
        "Creative Campaigns",
        "Photography & Video Production",
        "Branding & Visual Identity"
      ]
    },
    {
      title: "Marketing",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: [
        "Social Media Management",
        "PPC & Performance Marketing",
        "Lead Generation & Growth"
      ]
    }
  ];

  return <FocusCards cards={cards} />;
}
