import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function GoBackButton() {
    const navigate = useNavigate();
    return (<>
        {/* Glass Back Button */}
        <div className="absolute bottom-10 right-14 z-30 pointer-events-auto">
            <button
                onClick={() => navigate(-1)}
                className="
      w-16 h-16 rounded-full
      flex items-center justify-center
      bg-white/20 backdrop-blur-xl
      border border-white/30
      shadow-lg shadow-black/10
      text-white/80
      hover:bg-white/40
      hover:shadow-xl
      hover:scale-110
      transition-all duration-300
    "
            >
                <RiArrowGoBackLine size={22} />
            </button>
        </div>

    </>
    )
}