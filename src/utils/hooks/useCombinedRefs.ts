import { useRef, useEffect, Ref } from 'react';

const useCombinedRefs = <T>(...refs: (Ref<T> | null)[]) => {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31065#issuecomment-547327595
        // eslint-disable-next-line no-param-reassign
        (ref as React.MutableRefObject<T | null>).current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

export default useCombinedRefs;
