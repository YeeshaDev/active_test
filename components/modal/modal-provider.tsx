"use client";

import { useAtomValue } from "jotai";
import type { PropsWithChildren } from "react";

import cn from "../../utils/tailwind/cn";
import ModalStackAtom from "./modal-stack-atom";
import modalStackStore from "./modal-stack-store";

export default function ModalProvider({ children }: PropsWithChildren) {
  const modals = useAtomValue(ModalStackAtom, { store: modalStackStore });

  return (
    <>
      {children}
      {modals.map(({ id, node }, index, { length }) => {
        const isLast = index + 1 === length;

        return (
          <div key={id} className={cn(!isLast && "hidden")}>
            {node}
          </div>
        );
      })}
    </>
  );
}
