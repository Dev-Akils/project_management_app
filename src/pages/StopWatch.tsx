import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"

import type { RootState } from "../redux/store";
import { start, stop, reset, tick } from '../redux/Features/stopwatchSlice';


export default function Stopwatch() {
    const dispatch = useDispatch();
    const { time, isRunning } = useSelector((state: RootState) => state.stopwatch);

    useEffect(() => {
        let interval: number;
        if (isRunning) {
            interval = window.setInterval(() => {
                dispatch(tick());
            }, 1000);
        }

        return () => clearInterval(interval);

    }, [isRunning, dispatch]);
    const formatTime = (ms: number) => {
        const seconds = Math.floor(ms / 1000);
        const mins = Math.floor(seconds / 60);
        const hrs = Math.floor(mins / 60);

        return `${hrs.toString().padStart(2, "0")}:${(mins % 60)
            .toString()
            .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
    };

    return (
        <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1590490360182-c33d57733427")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh",

        }}><div className="inset-0 absolute bg-black/50 backdrop-blur-sm"></div>
            <div className="flex flex-col items-center gap-6 p-8 bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg">
                <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                    {formatTime(time)}
                </h1>

                <div className="flex gap-4">
                    <button
                        onClick={() => dispatch(start())}
                        className="px-6 py-2 bg-green-600/70 text-white font-semibold rounded-xl hover:bg-green-500 transition"
                    >
                        Start
                    </button>

                    <button
                        onClick={() => dispatch(stop())}
                        className="px-6 py-2 bg-yellow-600/70 text-white font-semibold rounded-xl hover:bg-yellow-500 transition"
                    >
                        Stop
                    </button>

                    <button
                        onClick={() => dispatch(reset())}
                        className="px-6 py-2 bg-red-600/70 text-white font-semibold rounded-xl hover:bg-red-500 transition"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};
