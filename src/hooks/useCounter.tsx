import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/count';
import { RootState } from '../modules';

function useCounter() {
  const number = useSelector((state: RootState) => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increaseAsync()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decreaseAsync()), [dispatch]);

  return {
    number,
    onIncrease,
    onDecrease,
  };
}

export default useCounter;
