import React from "react";
function useStatefulRef(initialVal = null) {
  let [cur, setCur] = React.useState(initialVal);
  const { current: ref } = React.useRef({
    current: cur
  });
  Object.defineProperty(ref, "current", {
    get: () => cur,
    set: (value) => {
      if (!Object.is(cur, value)) {
        cur = value;
        setCur(value);
      }
    }
  });
  return ref;
}
export { useStatefulRef as default };
