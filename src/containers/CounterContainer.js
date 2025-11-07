//Container Component (컨테이너 컴포넌트)
//Redux와 연결되어 데이터를 가져오거나(dispatch, state 접근) 처리하는 컴포넌트

//store에 저장된 데이터를 “읽는 건 useSelector”
//store에 저장된 데이터를 “바꾸는 건 useDispatch”
import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counter";
import Counter from "../components/Counter";

function CounterContainer() {
    //1. 리렌더링 일어나는 잘못된 예
    // const { number, diff } = useSelector(state => ({
    //     number: state.counter.number,
    //     diff: state.counter.diff,
    // }))

    //2. 정상적으로 렌더링 되는 조건
    // const { number } = useSelector(state => state.conunter.number);
    // const { diff } = useSelector(state => state.conunter.diff);

    //3. 정상적으로 렌더링 되는 조건
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff,
    }),
        // (left, right) => {
        //     return left.diff === right.diff && left.number === right.number;
        // }
        shallowEqual,
    )
    
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