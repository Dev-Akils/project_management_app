import { useEffect, useState } from "react";
import SideNavbar from "../Dashboard/SideNavbar"
type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    thumbnail: string;
};

const Dashboard = () => {
    const [users, setUsers] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch("https://dummyjson.com/products?limit=12")]
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                // setProducts(data.products);
                setUsers(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return <div className="text-center p-5">Loading Dashboard...</div>;
    }

    return (
        <>
            <SideNavbar />

            <div className="flex p-4 w-full h-full overflow-hidden bg-gray-100/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">

                    {/* Card 1 */}
                    <div className="flex flex-col justify-center items-center p-4 h-[200px] bg-slate-400/70 rounded-xl backdrop-blur-md">
                        <h2 className="text-lg font-bold text-black">Total Users</h2>
                        <p className="text-white font-bold text-4xl">{users.length}</p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col justify-center items-center p-4 h-[200px] bg-blue-400/70 rounded-xl backdrop-blur-md">
                        <h2 className="text-lg font-bold text-black">Active Users</h2>
                        <p className="text-white font-bold text-4xl">{users.length - 2}</p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col justify-center items-center p-4 h-[200px] bg-green-400/70 rounded-xl backdrop-blur-md">
                        <h2 className="text-lg font-bold text-black">New Users</h2>
                        <p className="text-white font-bold text-4xl">3</p>
                    </div>

                    {/* Card 4 */}
                    <div className="flex flex-col justify-center items-center p-4 h-[200px] bg-purple-400/70 rounded-xl backdrop-blur-md">
                        <h2 className="text-lg font-bold text-black">Admins</h2>
                        <p className="text-white font-bold text-4xl">1</p>
                    </div>

                </div>
            </div>
        </>

    );
};

export default Dashboard;
