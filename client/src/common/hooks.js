import {useRef, useEffect} from 'react';

/* eslint-disable */
export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
/* eslint-enable */
