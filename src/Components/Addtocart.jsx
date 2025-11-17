import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../state/Counter/CounterSlice";



const Addtocart =() =>{
    const dispatch = useDispatch();
    const value = useSelector((state) => state.counter.value);

    return(
        <div>
            <h1>{value}</h1>
            <div>
                <button onClick={ () => dispatch(decrement())}>-</button>
                <button onClick={ () => dispatch(increment())}>+</button>
            </div>
        </div>
    )
}

export default Addtocart;