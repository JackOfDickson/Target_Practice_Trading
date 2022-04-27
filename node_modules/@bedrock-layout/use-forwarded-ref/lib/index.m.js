import useStatefulRef from "@bedrock-layout/use-stateful-ref";
import React from "react";
function useForwardedRef(forwardedRef) {
  const innerRef = useStatefulRef(null);
  React.useEffect(() => {
    if (!forwardedRef)
      return;
    if (typeof forwardedRef === "function") {
      forwardedRef(innerRef.current);
    } else {
      forwardedRef.current = innerRef.current;
    }
  });
  return innerRef;
}
export { useForwardedRef as default };
