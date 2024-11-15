import type { ComponentType } from "react";

import type ModalBaseProps from "./modal-base-props";
import ModalStackAtom from "./modal-stack-atom";
import modalStackStore from "./modal-stack-store";

let globalModalCount = 0;

/**
 * @example
 * ```ts
 * const data = await showModal(MyModal, { ... });
 *
 * // Modal was closed.
 *
 * if (data !== null) {
 *   // Data was returned.
 * }
 * ```
 */
async function showModal<R>(
  Component: ComponentType<ModalBaseProps<R>>,
): Promise<R | null>;
async function showModal<R, P>(
  Component: ComponentType<ModalBaseProps<R> & P>,
  props: P,
): Promise<R | null>;

async function showModal<R, P>(
  Component: ComponentType<ModalBaseProps<R> | (ModalBaseProps<R> & P)>,
  props?: P,
): Promise<R | null> {
  const id = (++globalModalCount).toString();

  return new Promise<R | null>((resolve) => {
    const handleClose = (data: R) => {
      modalStackStore.set(ModalStackAtom, (modals) =>
        modals.filter((modal) => modal.id !== id),
      );

      resolve(data ?? null);
    };

    modalStackStore.set(ModalStackAtom, (modals) => [
      ...modals,
      {
        id,
        node:
          props === undefined ? (
            <Component onClose={handleClose} />
          ) : (
            <Component {...props} onClose={handleClose} />
          ),
      },
    ]);
  });
}

export default showModal;
