import { useState } from "react";

import axios from 'axios';
interface WeatherMain {
    temp: number
    pressure: number
    sea_level?: number
}

interface WeatherWind {
    speed: number
    deg: number
}

interface WeatherCondition {
    main: string
    description: string
    icon: string
}

interface WeatherResponse {
    main: WeatherMain
    wind: WeatherWind
    weather: WeatherCondition[]
}

export default function Weather_App() {
    const [city, setCity] = useState<string>("")
    const [weather, setWeather] = useState<WeatherResponse | null>(null)
    const [image, setImage] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")


    const fetchData = async (): Promise<void> => {
        if (!city.trim()) return

        setLoading(true)
        setError("")

        const url = `https://api.openweathermap.org/data/2.5/weather?appid=c5cfaca61133ecd387db8e0bfc086045&units=metric&q=${city}`

        try {
            const result = await axios.get<WeatherResponse>(url)
            setWeather(result.data)
            setImage(
                `https://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`
            )
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setError(
                    error.response?.data?.message || "City not found or API error"
                )
            } else {
                setError("Something went wrong")
            }
        } finally {
            setLoading(false)
        }
    }


    return (<>
        <div
            className="relative flex justify-center items-center w-full h-screen bg-cover bg-center"
            style={{
                backgroundImage:
                    'url("https://images.unsplash.com/photo-1590490360182-c33d57733427")',
            }}
        >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            <div
                className="relative flex flex-col items-center gap-6 
      w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] lg:h-[90%] h-[60%] overflow-y-scroll text-container
      p-8 rounded-2xl bg-white/40 backdrop-blur-xl shadow-2xl"
            >
                <h2 className="text-2xl font-bold text-gray-900">🌤 Weather App</h2>

                <input
                    type="text"
                    placeholder="Enter city name..."
                    value={city}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCity(e.target.value)
                    }
                    className="w-full h-14 px-5 rounded-xl bg-white/80 text-gray-800
        outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    onClick={fetchData}
                    disabled={loading}
                    className="w-full h-12 rounded-xl transition-all duration-300
        bg-blue-600 text-white font-semibold
        hover:bg-white/90 hover:text-black
        disabled:opacity-50"
                >
                    {loading ? "Fetching..." : "Get Weather"}
                </button>

                {error && <p className="text-red-500 font-semibold">{error}</p>}

                {image && (
                    <img
                        src={image}
                        alt="Weather Icon"
                        className="w-32 h-32 object-contain"
                    />
                )}

                {!weather && (
                    <div className="w-full bg-white/60 p-4 rounded-xl backdrop-blur-md text-center">
                        <p className="text-gray-600 font-semibold">
                            Search for a city to see weather 🌍
                        </p>
                    </div>
                )}

                {weather && (
                    <div
                        className={`w-full bg-white/60 p-4 rounded-xl backdrop-blur-md space-y-2
  transition-all duration-500 ease-out
  ${weather ? "opacity-100 scale-100 max-h-96" : "opacity-0 scale-95 max-h-0 overflow-hidden"}
`}
                    >
                        <p className="text-center text-lg font-bold">
                            {weather.main.temp}°C
                        </p>

                        {weather.weather.map((item, index) => (
                            <p key={index} className="text-center font-semibold">
                                {item.main}
                            </p>
                        ))}

                        <p className="text-center">
                            <span className="font-semibold">Pressure:</span>{" "}
                            {weather.main.pressure} hPa
                        </p>

                        <p className="text-center">
                            <span className="font-semibold">Sea Level:</span>{" "}
                            {weather.main.sea_level ?? "N/A"}
                        </p>

                        <p className="text-center">
                            <span className="font-semibold">Wind Speed:</span>{" "}
                            {weather.wind.speed} m/s
                        </p>

                        <p className="text-center">
                            <span className="font-semibold">Direction:</span>{" "}
                            {weather.wind.deg}°
                        </p>
                    </div>
                )}
            </div>
        </div>

    </>)
}