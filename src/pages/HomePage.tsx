import { useState } from "react";
import { Link } from "react-router-dom";


interface Project {
  title: string;
  description: string[];
  link?: string;
  gapLink?: string;
}

const projects: Project[] = [

  {
    title: "E-Commerce Product Manager",
    description: [
      "Interactive e-commerce product management app built with React and Redux.",
      "Users can browse products and add items to a dynamic shopping cart.",
      "Centralized Redux state ensures predictable cart and product updates.",
      "Real-time UI updates provide a smooth shopping experience.",
      "Reusable components designed for scalable front-end architecture.",
      "Responsive layout styled using modern UI practices.",
      "GitHub source: github.com/Dev-Akils/ProductManage_inReactRedux"
    ],
    gapLink: "https://product-manage-in-react-redux.vercel.app/",
  },

  {
    title: "Pokémon Explorer",
    description: [
      "Interactive Pokémon browsing app powered by the [PokeAPI](https://pokeapi.co/api/v2/pokemon/1/) for real-time data.",
      "Built with React(TSX)+Tailwind CSS.",
      "Uses React Query for efficient data fetching, caching, and state management.",
      "Infinite scrolling lets users browse Pokémon endlessly, loading new data automatically as they scroll.",
      "Detailed Pokémon cards display images, types, and base stats like HP, Attack, and Defense.",
      "Users can add or remove Pokémon from their collection, with data saved in localStorage for persistence.",
      "Github:https://github.com/Dev-Akils/pokemon_collection_app"
    ],
    gapLink: "https://pokemon-collection-app-sxxc.vercel.app",
  },

  {
    title: "Dashboard",
    description: [
      "Interactive dashboard developed using React, Redux Toolkit, and TypeScript.",
      "Displays analytics, charts, and summary cards with centralized state management.",
      "Implements reusable components for scalable and maintainable UI design.",
      "Designed with Tailwind CSS and Glassmorphism principles for a modern dashboard experience."
    ],
    link: "/dashboard",
  },

  {
    title: "Task Management Calendar",
    description: [
      "Interactive task management calendar built using React (TSX) and Tailwind CSS.",
      "Users can add, update, and delete tasks directly inside calendar dates.",
      "Visual calendar layout makes task planning intuitive and organized.",
      "Task notes can be attached to specific days for better tracking.",
      "Real-time UI updates provide a smooth task management experience.",
      "Responsive design ensures usability across desktop and mobile devices.",
      "Optimized component structure for scalable front-end architecture.",
      "Github:https://github.com/Dev-Akils/task_management_using_ts"

    ],
    gapLink: "https://task-management-using-ts-akqc.vercel.app",
  },
  {
    title: "Todo App",
    description: [
      " Task management application built using React, Redux Toolkit, and TypeScript.",
      "Implements CRUD operations with centralized state management.",
      "Includes a stopwatch feature for time tracking using Redux state.",
      "Styled with Tailwind CSS and Glassmorphism UI for a modern user experience.",

    ],





    link: "/todo",
  },

  {
    title: "Embassy Clone—Navigation(31–38)",
    description: [
      "Interactive architect floor explorer built with React and Tailwind CSS.",
      "Polygon-based room and space highlighting for precise visual mapping.",
      "Dynamic tooltips display room details on hover.",
      "Smooth navigation between architectural sections.",
      "Responsive layout optimized for large screens and tablets.",
      "Reusable React components for scalable UI structure.",
      "GitHub source: github.com/Dev-Akils/embassy-clone1"
    ],
    gapLink: "https://embassy-clone1-ijnq.vercel.app/",
  },


  {
    title: "Stopwatch",
    description: [
      "Real-time stopwatch application built using React, Redux Toolkit, and TypeScript.",
      "Supports start, pause, resume, and reset functionality with accurate time tracking.",
      "Uses Redux state to manage timer logic and ensure predictable updates.",
      "Optimized with clean UI using Tailwind CSS and Glassmorphism design principles."
    ],
    link: "/stopwatch",
  },
  {
    title: "Weather App",
    description: [
      "Weather forecasting application built using React and TypeScript.",
      "Fetches real-time weather data from external APIs with error handling.",
      "Displays temperature, humidity, and weather conditions in a user-friendly layout.",
      "Styled with Tailwind CSS and Glassmorphism UI for a modern visual experience."
    ],
    link: "/weather_app",
  },

  


  {
    title: "UI",
    description: [
      "Modern responsive UI built using React and Tailwind CSS.",
      "Optimized layout for both desktop and mobile devices.",
      "Fixed stepper navigation allows smooth access between sections.",
      "Smooth scrolling enhances the overall user experience.",
      "Reusable React components ensure scalable front-end architecture.",
      "Utility-first Tailwind styling enables fast and consistent UI design.",
      "GitHub: github.com/Dev-Akils/gems_school_homepage_ui"
    ],
    gapLink: "https://gems-school-homepage-ui-vtnu.vercel.app/",
  },







];

export default function HomePage() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1505691938895-1758d7feb511')] bg-cover bg-center relative">

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative w-[85%] h-[550px] mb-16 lg:mb-0 overflow-y-auto text-container p-4">

        {/* 1. Added 'items-start' so cards don't stretch each other */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, index) => {
            const isExternal = !!project.gapLink;
            const buttonText = isExternal ? "Live" : "Explore";

            return (
              <div
                key={index}
                /* 2. Removed justify-between to allow natural height expansion */
                className="rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 
        shadow-xl p-6 text-white flex flex-col transition-all duration-300 hover:bg-white/15"
              >
                <h3 className="text-xl font-semibold mb-4 tracking-tight">
                  {project.title}
                </h3>

                {/* 3. Refined Description Area */}
                <div
                  className={`
            overflow-hidden transition-all duration-700 ease-in-out
            ${expanded[index] ? "max-h-[530px] opacity-100" : "max-h-[80px] opacity-80"}
          `}
                >
                  <ul className="list-disc list-inside text-[16px] space-y-3">
                    {project.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* 4. Improved Toggle UI */}
                {project.description.length > 2 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-4 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {expanded[index] ? "− Less" : "+ Details"}
                  </button>
                )}

                <div className="mt-6">
                  {isExternal ? (
                    <a
                      href={project.gapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center text-sm font-bold text-black bg-white rounded-xl py-3 hover:scale-[1.02] transition-transform active:scale-95"
                    >
                      {buttonText}
                    </a>
                  ) : (
                    <Link
                      to={project.link!}
                      className="inline-block w-full text-center text-sm font-bold text-black bg-white rounded-xl py-3 hover:scale-[1.02] transition-transform active:scale-95"
                    >
                      {buttonText}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}