import { useDispatch } from "react-redux";

import { addTodo } from "../todoSlice";

export default function AddButton({text, setText}: {text: string; setText: (text: string) => void}) {
     
    const dispatch = useDispatch();
     const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText("");
        }

    }
    return(<>
    <button onClick={handleAdd}>➕</button>
    </>)
}