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

import { GiPokecog } from "react-icons/gi";
import { BsCalendarCheck } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdOutlineArchitecture } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";




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

    // external apps
    { id: 6, name: "Pokémon", path: "https://pokemon-collection-app-sxxc.vercel.app/", icon: <GiPokecog /> },
    { id: 7, name: "Calendar", path: "https://task-management-using-ts-akqc.vercel.app/", icon: <BsCalendarCheck /> },
    { id: 8, name: "UI Demo", path: "https://gems-school-homepage-ui-vtnu.vercel.app/", icon: <HiOutlineSparkles /> },
    {
      id: 9,
      name: "Embassy",
      path: "https://embassy-clone1-ijnq.vercel.app/",
      icon: <MdOutlineArchitecture />
    },
    {
  id: 10,
  name: "E-Commerce",
  path: "https://product-manage-in-react-redux.vercel.app/",
  icon: <BsCartCheck />
}



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
      <div className="hidden lg:block absolute top-[2%]  left-[1%] z-30">
        <div className="bg-black/30 backdrop-blur-xl border border-white/30 rounded-[40px] p-2 shadow-2xl animate-float">
          <nav className="space-y-3">
            {data.map(item => (
              <NavItem key={item.id} item={item} />
            ))}
          </nav>
        </div>
      </div>

      {/* ================= TABLET (Right Vertical) ================= */}
      <div className={`lg:hidden hidden md:block fixed   ${isHome ? "bottom-20" : "bottom-2"} left-1/2 
      -translate-x-1/2 z-40 w-[90%] `}>
        <div className="bg-black/30 backdrop-blur-xl border border-white/30
         rounded-3xl p-2 shadow-xl">
          <nav className="flex justify-around p-1">
            {data.map(item => (
              <NavItem key={item.id} item={item} />
            ))}
          </nav>
        </div>
      </div>

      {/* ================= MOBILE (Bottom Bar) ================= */}
      <div className={`md:hidden fixed   ${isHome ? "bottom-20" : "bottom-2"} left-1/2 
      -translate-x-1/2 z-40 w-full `}>
        <div className="bg-black/40 backdrop-blur-xl border
         border-white/30 rounded-3xl shadow-2xl ">
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
