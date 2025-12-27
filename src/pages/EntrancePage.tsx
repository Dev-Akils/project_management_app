import {
    //  useRef,
     useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import video from "../video/Dosti_Walkthrough_Trim (1).mp4";
// import hero from '../assets/hero.jpeg'
// import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
// import { FaPause, FaPlay } from "react-icons/fa";
// import logo from '../assets/Gallery/Logofinal.png'

export default function EntrancePage() {
//     const videoRef = useRef<HTMLVideoElement | null>(null);
// const [muted, setMuted] = useState<boolean>(true);
// const [paused, setPaused] = useState<boolean>(false);

    // Text Lines
    const textLines:string[] = [
        "For over four decades, Dosti Realty has been a symbol of trust and excellence in real estate, transforming both locations and lives.",
        "Driven by a deep understanding of evolving customer needs, we have delivered over 13.60 mn sq. ft. across 140+ properties.",
        "We have shaped over 23,200 residences into homes where families thrive.",
        "Guided by our ethos, ‘Friends for Life’, we focus on thoughtful design and timeless architecture.",
        "We ensure a seamless home-buying experience—from construction updates to post-possession support.",
        "We build more than just structures; we create spaces that foster belonging and harmony.",
        "With 21 mn sq. ft. upcoming developments across Mumbai and Pune, we continue our journey of excellence."
    ];

    const [visibleLines, setVisibleLines] = useState<string[]>([]);

    // Line by Line Reveal Effect
   useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
        if (index < textLines.length) {
            setVisibleLines((prev) => [...prev, textLines[index]]);
            index++;

            // Auto scroll after every 3 lines
            if (index % 3 === 0) {
                window.scrollTo({
                    top: window.scrollY + 150,
                    behavior: "smooth",
                });
            }
        } else {
            clearInterval(interval); // Stop the interval after last line
        }
    }, 1500);

    return () => clearInterval(interval); // Cleanup on unmount
}, []);


    // Mute / Unmute
    // const toggleMute = () => {
    //     if (!videoRef.current) return;
    //     videoRef.current.muted = !muted;
    //     setMuted(!muted);
    // };

    // Play / Pause
    // const togglePlay = () => {
    //     if (!videoRef.current) return;
    //     if (paused) {
    //         videoRef.current.play();
    //     } else {
    //         videoRef.current.pause();
    //     }
    //     setPaused(!paused);
    // };

    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background Video */}
                {/* <video
                    ref={videoRef}
                    src={video}
                    autoPlay
                    muted={muted}
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                /> */}

                 <img 
                    // ref={videoRef}
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                    // autoPlay
                    // muted={muted}
                    // loop
                    // playsInline
                    className="w-full h-full object-cover"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>

                {/* <div className="absolute bottom-[50%] md:bottom-[50%] lg:bottom-[55%] 2xl:bottom-[45%] w-full left-2 mb-2">
                  <img src={logo} className="w-36 h-24"/>
                </div> */}

                {/* Text Animation Container */}
                <div className="absolute bottom-1/4 left-10 w-[80%] md:w-[65%] lg:w-[35%] h-40 overflow-y-scroll text-container text-white space-y-3 text-[16px]">
                    {visibleLines.map((line, index) => (
                        <p
                            key={index}
                            className="opacity-0 animate-fadeSlide  leading-relaxed"
                        >
                            {line}
                        </p>
                    ))}

                    
                </div>
                <div className="absolute bottom-[15%] w-full left-10 animate-float">
                    {/* Explore Button */}
                    <Link to="/projects">
                        <button className="mt-6 w-[55%]  md:w-[35%] lg:w-[20%] py-3 bg-white/20 backdrop-blur-xl text-black font-bold rounded-lg border border-white hover:bg-white/30 transition">
                            Explore Projects→
                        </button>
                    </Link>
                </div>

                {/* Video Control Buttons 
                <div className="absolute bottom-10 right-10 flex gap-4">

                    {/* Mute / Unmute 
                    <button
                        onClick={toggleMute}
                        className="p-3 bg-white/30 animate-float1 backdrop-blur-xl text-white rounded-full border border-white hover:bg-white/40 transition shadow-lg"
                    >
                        {muted ? <HiVolumeOff size={20} /> : <HiVolumeUp size={20} />}
                    </button>

                    {/* Play / Pause 
                    <button
                        onClick={togglePlay}
                        className="p-3 bg-white/30 animate-float backdrop-blur-xl text-white rounded-full border border-white hover:bg-white/40 transition shadow-lg"
                    >
                        {paused ? <FaPlay size={17} /> : <FaPause size={17} />}
                    </button>
                </div>  */}
            </div>

            {/* Text Animation CSS */}
            <style>{`
                @keyframes fadeSlide {
                    0% { opacity: 0; transform: translateY(10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                .animate-fadeSlide {
                    animation: fadeSlide 0.4s forwards;
                }
            `}</style>
        </>
    );
}
