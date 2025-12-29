import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      className="flex overflow-hidden h-screen items-center justify-center bg-cover bg-center animate-float"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      <div className="
        flex flex-col items-center justify-center
        w-[100%]
        h-screen
        bg-white/20
        backdrop-blur-xl
        border border-white/30
        shadow-2xl
       
        p-10
        text-center
      ">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <button className="
            px-6 py-3
            bg-white/25
            backdrop-blur-lg
            border border-white/30
            rounded-2xl
            text-gray-900
            font-semibold
            hover:bg-white/40
            hover:scale-105
            transition-all duration-300
          ">
            GO HOME
          </button>
        </Link>
      </div>
    </div>
  );
}
