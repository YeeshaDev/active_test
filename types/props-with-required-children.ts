import type { ReactNode } from "react";

type PropsWithRequiredChildren<P> = P & {
  children: ReactNode;
};

export default PropsWithRequiredChildren;
