
import { useDispatch} from "react-redux";

import { deleteTodo } from "../redux/Features/todoSlice";
export default function DeleteButton({id}:{id:number}){

    
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(id));
    }

    return(
        <>
        <button onClick={handleDelete}>❌</button>
        </>
    )
}