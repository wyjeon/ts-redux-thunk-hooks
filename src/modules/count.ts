import { Dispatch } from 'redux';

// 액션 타입
const INCREMENT = 'couter/INCREMENT' as const;
const DECREMENT = 'counter/DECREMENT' as const;

// 액션 생성함수
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

export const increaseAsync = () => (dispatch: Dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsync = () => (dispatch: Dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

// 액션 객체들에 대한 type
type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

// 상태의 타입
type CounterState = {
  number: number;
};

// 초기상태
const initialState: CounterState = {
  number: 0,
};

// 리듀서
const counter = (state: CounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
