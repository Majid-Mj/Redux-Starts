import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment , incrementByTen,clearCount} from "../state/Counter/CounterSlice";

const Counter =()=>{
    const value = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{value}</h2>

            <div>

                <button onClick={ ()=> dispatch(clearCount(0))}>Clear</button>
                <button onClick={() => dispatch(incrementByTen(10))}>CountBy10</button>
            </div>
        </div>
    )
}

export default Counter;