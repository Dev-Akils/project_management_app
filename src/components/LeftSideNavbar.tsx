import { Link, useLocation } from "react-router-dom";
// import { PiMapPinLight } from "react-icons/pi";
import {
  // BsFront,
  BsPentagon
} from "react-icons/bs";
// import { RiShiningLine } from "react-icons/ri";
// import { TbBuildingSkyscraper } from "react-icons/tb";
import { BsStopwatch } from "react-icons/bs";
import { MdDashboardCustomize } from "react-icons/md";

import { TiWeatherPartlySunny } from "react-icons/ti";

import { LuListTodo } from "react-icons/lu";

type NavItemProps = {
  item: {
    id: number;
    name: string;
    path: string;
    // icon: JSX.Element;
    icon: React.ReactNode;
  };
};
export default function Navbar() {
  const location = useLocation();

  const data = [
    { id: 1, name: "Intro", path: "/", icon: <BsPentagon /> },
    { id: 2, name: "Todo", path: "/todo", icon: <LuListTodo /> },
    { id: 3, name: "Stopwatch", path: "/stopwatch", icon: <BsStopwatch /> },
    { id: 4, name: "Weather", path: "/weather_app", icon: <TiWeatherPartlySunny /> },
    { id: 5, name: "Dashboard", path: "/dashboard", icon: <MdDashboardCustomize /> },
  ];
  const isHome = location.pathname === "/";


  const NavItem = ({ item }: NavItemProps) => {
    const isActive =
      item.path === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(item.path);

    return (
      <Link to={item.path}>
        <li
          className={`
          flex flex-col items-center gap-1 p-3 rounded-[35%]
          transition-all duration-300 cursor-pointer mb-1
          ${isActive
              ? "bg-white/20 text-white scale-105 shadow-lg"
              : "text-gray-200 hover:bg-white/10 hover:text-white hover:scale-105"
            }
        `}
        >
          <span className="text-xl">{item.icon}</span>
          <span className="text-[10px] font-medium">{item.name}</span>
        </li>
      </Link>
    );
  };


  return (
    <>
      {/* ================= DESKTOP (Left Vertical) ================= */}
      <div className="hidden lg:block absolute top-1/4 lg:top-[28%] left-[2%] z-30">
        <div className="bg-black/30 backdrop-blur-xl border border-white/30 rounded-[40px] p-2 shadow-2xl animate-float">
          <nav className="space-y-3">
            {data.map(item => (
              <NavItem key={item.id} item={item} />
            ))}
          </nav>
        </div>
      </div>

      {/* ================= TABLET (Right Vertical) ================= */}
      <div className="hidden md:block lg:hidden fixed top-1/4 left-3 z-30">
        <div className="bg-black/30 backdrop-blur-xl border border-white/30 rounded-3xl p-2 shadow-xl">
          <nav className="space-y-2">
            {data.map(item => (
              <NavItem key={item.id} item={item} />
            ))}
          </nav>
        </div>
      </div>

      {/* ================= MOBILE (Bottom Bar) ================= */}
      <div className={`md:hidden fixed   ${isHome ? "bottom-20" : "bottom-2"} left-1/2 -translate-x-1/2 z-40 w-[95%]`}>
        <div className="bg-black/40 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl">
          <nav className="flex justify-around">
            {data.map(item => (
              <NavItem key={item.id} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
