//Presentational Component (프리젠테이션 컴포넌트)
//UI를 보여주는 데만 집중하는 컴포넌트
import React from "react";

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
    const onChange = e => {
        onSetDiff(parseInt(e.target.value, 10));
    }

    return (
        <div>
            <h1>{number}</h1>
            <input type="number" value={diff} onChange={onChange}></input>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default Counter;