import { useState, useCallback } from "react";

interface UseDisclosureProps {
  defaultvalue: boolean;
}

export const useDisclosure = (
  props: UseDisclosureProps = { defaultvalue: false }
) => {
  const [isOpened, setIsOpened] = useState(props.defaultvalue);

  const open = useCallback(() => setIsOpened(true), []);
  const close = useCallback(() => setIsOpened(false), []);
  const toggle = useCallback(() => setIsOpened((prev) => !prev), []);

  return { isOpened, open, close, toggle };
};

export default useDisclosure;
