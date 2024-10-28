declare module "@venting-heartbreak" {
  type HelloParams = {
    name: string;
    age?: number;
  };

  interface UseDisclosureProps {
    defaultvalue: boolean;
  }

  export const hello: (params: HelloParams) => string;

  export function useDisclosure(props?: UseDisclosureProps): {
    isOpened: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
  };
}
