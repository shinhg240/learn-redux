//Container Component (컨테이너 컴포넌트)
//Redux와 연결되어 데이터를 가져오거나(dispatch, state 접근) 처리하는 컴포넌트

//store에 저장된 데이터를 “읽는 건 useSelector”
//store에 저장된 데이터를 “바꾸는 건 useDispatch”
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counter";
import Counter from "../components/Counter";

function CounterContainer() {
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff,
    }))
    
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    )
}

export default CounterContainer;