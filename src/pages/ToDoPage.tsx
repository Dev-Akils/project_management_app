import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store";
import { toggleTodo } from "../todoSlice";
import AddButton from "../components/AddButton";
import DeleteButton from "../components/DeleteButton";
import UpdateButton from "../components/UpdateButton";

export default function ToDoPage() {
    const [text, setText] = useState("");
    const todos = useSelector((state: RootState) => state.todo.todos);
    const dispatch = useDispatch();


    return (<>



        <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1590490360182-c33d57733427")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh",

        }}><div className="inset-0 absolute bg-black/50 backdrop-blur-sm"></div>

            <div className="flex  flex-col z-10 justify-center items-center p-8 bg-white/30 
            backdrop-blur-xl rounded-xl shadow-lg w-96 h-96">

                <h2 className="text-2xl font-bold mb-4 text-gray-800">Todo App (TS + Redux)</h2>

                <div className="flex w-full mb-6 gap-2 ">
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter Todo"
                        className="flex-1 px-4 py-2 rounded-lg   focus:bg-none ring-inherit  border border-gray-300 focus:outline-none focus:ring-0 focus:ring-gray-400"
                    />
                    <AddButton text={text} setText={setText} />
                </div>
                <div className="max-h-[60vh] overflow-y-scroll w-[320px] text-container">
                    <ul className="w-full flex flex-col gap-2">
                        {todos.map((todo) => (
                            <li
                                key={todo.id}
                                className="flex justify-between items-center bg-white/50 backdrop-blur-md p-2 rounded-md shadow-sm"
                            >
                                <span
                                    onClick={() => dispatch(toggleTodo(todo.id))}
                                    className={`flex-1 cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}
                                >
                                    {todo.text}
                                </span>
                                <div className="flex gap-2 ml-2">
                                    <UpdateButton id={todo.id} />
                                    <DeleteButton id={todo.id} />
                                </div>
                            </li>
                        ))}
                    </ul></div>
            </div>
        </div>




    </>)
}