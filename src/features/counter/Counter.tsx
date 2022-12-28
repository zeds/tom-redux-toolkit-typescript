import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { decrement, increment, incrementAsync } from './counterSlice';

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
		<div className="bg-gray-300 w-full h-screen p-4">
      <div className="flex">
				<button
					className="bg-blue-300 p-3 rounded mx-2"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
				<div className="bg-yellow-300 p-4 w-[100px] text-center">{count}</div>
        <button
					className="bg-blue-300 p-3 rounded mx-2"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
					className="bg-blue-300 p-3 rounded mx-2"
          aria-label="Increment async value"
          onClick={() => dispatch(incrementAsync())}
        >
          Increment async
        </button>
      </div>
    </div>
  );
}