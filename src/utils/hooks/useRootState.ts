import type { RootReducerTypes } from '@src/reducers';
import { useSelector } from 'react-redux';

type StateSelector<T> = (state: RootReducerTypes) => T;
type EqualityFunction<T> = (left: T, right: T) => boolean;

export default function useRootState<T>(
  selector: StateSelector<T>,
  equalityFunction?: EqualityFunction<T>
) {
  return useSelector(selector, equalityFunction);
}
