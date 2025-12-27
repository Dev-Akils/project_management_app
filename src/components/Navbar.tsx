export default function Navbar() {
    return (<>
        {/* Glass Navbar */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[80%] rounded-2xl bg-white/20 backdrop-blur-xl shadow-lg border border-white/30">
            <div className="flex items-center justify-between px-10 py-4">
                <h1 className="text-xl font-semibold text-white">My Projects</h1>
                <ul className="flex gap-6 text-white text-sm">
                    <li className="cursor-pointer hover:text-gray-200">Home</li>
                    <li className="cursor-pointer hover:text-gray-200">Projects</li>
                    {/* <li className="cursor-pointer hover:text-gray-200">Contact</li> */}
                </ul>
            </div>
        </nav>
    </>)
}