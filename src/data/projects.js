import uniquePestControlImage from "../assets/projects/unique-pest-control.webp";
import sovereignEventsImage from "../assets/projects/sovereign-events.webp";

// Real project data only. Links are left null where not yet provided —
// components must render an honest "on request" state instead of a dead link.
// `image` is a real, unedited screenshot frame captured from the live site
// (never AI-generated) — see the projects/ProjectVisual component.
export const projects = [
  {
    id: "unique-pest-control",
    number: "01",
    title: "Unique Pest Control",
    category: "Business Website",
    tech: ["React", "Vite", "Tailwind CSS"],
    description:
      "A responsive business website built for a pest control company, covering both the customer-facing frontend and its supporting architecture.",
    status: "Live",
    liveUrl: null,
    githubUrl: null,
    image: uniquePestControlImage,
    caseStudy: {
      overview:
        "A full business website for a pest control company — built to present services clearly, load fast and work cleanly across devices.",
      problem:
        "The business needed a professional online presence that could represent its services credibly and be easy for customers to navigate on any device.",
      role: "UI/UX design and frontend development, along with the supporting application architecture.",
      process: [
        "Structured the site's information architecture around services and customer trust signals.",
        "Designed a clean, responsive layout in Figma before development.",
        "Built the frontend with React and Vite, styled with Tailwind CSS.",
        "Implemented the supporting frontend and backend architecture needed to run the site.",
        "Tested responsiveness across mobile, tablet and desktop breakpoints.",
      ],
      responsiveDesign:
        "Built mobile-first with layouts verified across common device widths.",
      outcome:
        "A live, deployed business website with a clean, responsive interface.",
      technology: ["React", "Vite", "Tailwind CSS"],
    },
  },
  {
    id: "ascend",
    number: "02",
    title: "ASCEND",
    category: "Productivity / Self-Improvement App",
    tech: ["React", "Figma", "Design System"],
    description:
      "A personal productivity and self-improvement application, designed around a cohesive design system across multiple application screens.",
    status: null,
    liveUrl: null,
    githubUrl: null,
    caseStudy: {
      overview:
        "ASCEND is a UI/UX-focused productivity application concept, designed to help users build and track self-improvement habits.",
      problem:
        "Most productivity apps either overwhelm users with options or feel generic. ASCEND explores a calmer, more intentional interface for daily self-improvement.",
      role: "UI/UX design and frontend implementation, including the design system.",
      process: [
        "Defined core user flows across the application's key screens.",
        "Built a reusable design system — type scale, color tokens, components — before screen design.",
        "Designed multiple application screens in Figma with a consistent visual language.",
        "Implemented the interface in React, translating the design system into reusable components.",
      ],
      responsiveDesign:
        "Screens designed with responsive layout behaviour in mind from the start.",
      outcome:
        "A multi-screen application UI backed by a consistent, reusable design system.",
      technology: ["React", "Figma", "Design System"],
    },
  },
  {
    id: "sovereign-events",
    number: "03",
    title: "Sovereign Events",
    category: "Event Management UI",
    tech: ["UI/UX Design", "Figma"],
    description:
      "A UI/UX-focused interface concept for managing events — from planning through execution.",
    status: null,
    liveUrl: null,
    githubUrl: null,
    image: sovereignEventsImage,
    caseStudy: {
      overview:
        "Sovereign Events is a UI/UX design project exploring an interface for event management workflows.",
      problem:
        "Event management involves coordinating many moving parts — this project explores how a clear interface can make that easier to manage.",
      role: "UI/UX design.",
      process: [
        "Explored the core screens an event management interface would need.",
        "Designed layouts and components in Figma with a focus on clarity and hierarchy.",
      ],
      responsiveDesign: "Designed with responsive layout principles in mind.",
      outcome: "A UI/UX design project demonstrating interface design for event workflows.",
      technology: ["UI/UX Design", "Figma"],
    },
  },
];
