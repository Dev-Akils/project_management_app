import { Link } from "react-router-dom";


interface Project {
  title: string;
  description: string[];
  link?: string;
  gapLink?: string;
}

const projects: Project[] = [
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
    title: "Pokémon Explorer",
    description: [
      "Interactive Pokémon browsing app powered by the [PokeAPI](https://pokeapi.co/api/v2/pokemon/1/) for real-time data.",
      "Built with React, TypeScript (TSX), and styled using Tailwind CSS for a fast and responsive design.",
      "Uses React Query for efficient data fetching, caching, and state management.",
      "Infinite scrolling lets users browse Pokémon endlessly, loading new data automatically as they scroll.",
      "Detailed Pokémon cards display images, types, and base stats like HP, Attack, and Defense.",
      "Users can add or remove Pokémon from their personal collection, with data saved in localStorage for persistence.",
      "Optional drag-and-drop feature allows reordering of Pokémon in the collection for a customized experience."
    ],
    gapLink: "pokemon-collection-app-sxxc.vercel.app",
  }


];

export default function HomePage() {
  return (
    <div className="min-h-screen justify-center items-center flex bg-[url('https://images.unsplash.com/photo-1505691938895-1758d7feb511')] bg-cover bg-center">
      <div className="bg-black/50 absolute inset-0"></div>


      {/* Hero Section */}
      <div className="w-[70%] lg:w-[80%] text-container absolute h-[400px] lg:h-[550px]  overflow-scroll justify-center items-center flex">



        {/* Projects Section */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 absolute top-5 md:top-0 lg:top-0 p-2 md:p-2 lg:p-2">
          {projects.map((project, index) => {

            const isExternal = !!project.gapLink; // check if live/demo exists
            const buttonText = isExternal ? "Live" : "Explore";

            return (
              <div
                key={index}
                className="rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg p-6 text-white  transition"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <ul className="list-disc list-inside text-sm text-white/80 space-y-2">
                  {project.description.map((e, index) => (
                    <li key={index}>{e}</li>
                  ))}
                </ul>


                {/* <Link
                to={project?.link}
                className="inline-block mt-3 w-full text-center text-sm font-medium text-black bg-white/95 rounded-lg px-4 py-2 hover:bg-gray-200"
              >
                Explore
              </Link>

           
              {project.gapLink && (
                <a
                  href={project.gapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center text-sm font-medium text-black bg-white/95 rounded-lg px-4 py-2 hover:bg-gray-200"
                >
                  Live Demo
                </a>
              )} */}

                <div className="mt-4">
                  {isExternal ? (
                    <a
                      href={project.gapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center text-sm font-medium text-black bg-white/95 rounded-lg px-4 py-2 hover:bg-gray-200"
                    >
                      {buttonText}
                    </a>
                  ) : (
                    <Link
                      to={project.link}
                       className="inline-block mt-3 w-full text-center text-sm font-medium text-black bg-white/95 rounded-lg px-4 py-2 hover:bg-gray-200"
                     > {buttonText}
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  );
}
