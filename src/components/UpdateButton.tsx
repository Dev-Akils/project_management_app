import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../todoSlice";


export default function UpdateButton({ id }: { id: number }) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState("");

    const handleUpdate = () => {
        if (!value.trim()) return;
        dispatch(updateTodo({ id, text: value }));
        setIsEditing(false);
        setValue("");
    }


    if (isEditing) {
        return (
            <div className="flex gap-1">
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="px-2 py-1 rounded-md border focus:outline-none focus:ring-0 w-28"
                    autoFocus
                />
                <button
                    onClick={handleUpdate}
                    className="px-2 py-1 bg-green-500 text-white rounded-md"
                >
                    ✔
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={() => setIsEditing(true)}
            className="px-2 py-1 bg-blue-500 text-white rounded-md"
        >
            ✎
        </button>

    );
}