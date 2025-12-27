

const projects = [
  {
    title: "Todo App",
    description: "Task management app using React, Redux Toolkit & TypeScript.",
    link: "/todo",
  },
  {
    title: "Weather App",
    description: "Real-time weather data using public APIs.",
    link: "/weather",
  },
  {
    title: "Dashboard",
    description: "Admin dashboard with charts and tables.",
    link: "/dashboard",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1505691938895-1758d7feb511')] bg-cover bg-center">
      <div className="bg-black/50 absolute inset-0"></div>
     

      {/* Hero Section */}
      <div className="pt-32 px-6 md:px-20">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome 👋
        </h2>
        <p className="text-white/80 max-w-xl">
          Explore my React projects like Todo App, Weather App, and more.
        </p> */}
      </div>

      {/* Projects Section */}
      <div className="mt-10 px-6 md:px-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg p-6 text-white hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-white/80 mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              className="inline-block mt-auto text-sm font-medium text-black bg-white rounded-lg px-4 py-2 hover:bg-gray-200"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
