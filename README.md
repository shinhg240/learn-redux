Redux 테스트 코드

//Presentational Component (프리젠테이션 컴포넌트)
//UI를 보여주는 데만 집중하는 컴포넌트

//Container Component (컨테이너 컴포넌트)
//Redux와 연결되어 데이터를 가져오거나(dispatch, state 접근) 처리하는 컴포넌트

//store에 저장된 데이터를 “읽는 건 useSelector”
//store에 저장된 데이터를 “바꾸는 건 useDispatch”

//Ducks 패턴 > actions, action types, reducer 하나에 묶음


//react dev tools
 > 렌더링 최적화시 사용



액션 > 미들웨어 > 리듀서 > 스토어
1. 리덕스가 지니고 있는 핵심기능
2. contextAPI, Reducer와 차별되는 기능
3. 즉 미들웨어를 안쓰면 contextAPI, Reducer 차이가 없음
4. 액션 dispatch > 미들웨어에서 무시 > 리듀서로 진행 안하게 할 수 있음
5. 특정코드 실행 가능(비동기 작업, 복잡한 계산등)

미들웨어 종류
1. redux-thunk
2. redux-saga
3. redux-observavle
4. rerux-promise-middleware