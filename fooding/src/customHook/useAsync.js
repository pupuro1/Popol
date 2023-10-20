import { useReducer, useEffect } from "react"
const initialState = {
    loading: false,
    data: null,
    error: null
}
// 로딩중? 데이터 받기 성공? 데이터 받기 실패
// LOADING , SUCCESS, ERROR
function reducer(state, action){
    switch(action.type) {
        case "LOADING":
            return {
                loading: true,
                data: null,
                error: null
            };
        case "SUCCESS":
            return {
                loading: false,
                data: action.data,
                error: null
            }
        case "ERROR":
            return {
                loading: false,
                data: null,
                error: action.error
            }
        default:
            return state;
    }
}

//컴스텀 훅
function useAsync(callback, deps = []) { // 콜백은 이거 사용하는 컴포넌트에서 인자로 넘겨준 함수, deps는 안주면 기본값=[]
    // console.log("useAsync진입: ", deps);
    const [state, dispatch] = useReducer(reducer, initialState); 

    const fetchDate = async () => {
        dispatch({type: "LOADING"});
        try {
            const data = await callback(); // 받아온 함수 실행해서 반환값 data에 넣음
            console.log("data: ", data);
            dispatch({
                type: "SUCCESS", 
                data: data
            })
        }
        catch(e){
            dispatch({
                type: "ERROR",
                error: e
            })
        }
    }
    useEffect(()=>{ // useEffect(()=>{}, [])는 처음 1회만 실행 
        fetchDate(); 
    // eslint-disable-next-line
    }, deps); //dep 안줘서 기본값 []들어오면 처음 한번만 실행, 다른 배열 넣어 줬으면 그 배열 바뀔때마다 다시 실행
    return [state, fetchDate]; 
}
export default useAsync