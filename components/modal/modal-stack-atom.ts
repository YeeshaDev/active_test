import { atom } from "jotai";
import type { ReactNode } from "react";

const ModalStackAtom = atom<Array<{ id: string; node: ReactNode }>>([]);

export default ModalStackAtom;
