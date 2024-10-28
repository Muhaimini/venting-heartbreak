declare module "@venting-hearbreak/types" {
  type DynamicProps<T = unknown> = T;
  type MdWithDynamicProps<T = unknown> = (props: T) => void;
  type FnWithDynamicProps<T = unknown> = (props: P) => T;
}
