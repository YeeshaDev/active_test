"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Close as RadixDialogClose,
  Content as RadixDialogContent,
  Overlay as RadixDialogOverlay,
  Portal as RadixDialogPortal,
  Root as RadixDialogRoot,
  Title as RadixDialogTitle,
  Trigger as RadixDialogTrigger,
} from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import cn from "@/utils/tailwind/cn";
import cv from "@/utils/tailwind/cv";

export interface RootComponentProps
  extends ComponentPropsWithoutRef<typeof RadixDialogRoot> {
  readonly stateParam?: string;
}

export interface ModalProps
  extends ComponentPropsWithoutRef<typeof RadixDialogContent> {
  readonly position?: "center" | "left" | "right" | "full";
  readonly hideClose?: boolean;
  readonly overlayClassName?: string;
  readonly rootProps?: RootComponentProps;
}

const modalVariants = cv("fixed z-50 w-full max-w-[21.5rem]", {
  variants: {
    position: {
      center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
      left: "left-0 top-0 h-full",
      right: "right-0 top-0 h-full",
      full: "left-0 top-0 size-full",
    },
  },
});

function ModalComponent({
  hideClose,
  className,
  children,
  overlayClassName,
  position = "center",
  ...restProps
}: PropsWithChildren<ModalProps>) {
  return (
    <RadixDialogPortal>
      <RadixDialogOverlay
        className={cn(
          "fixed inset-0 z-50 bg-gray-600/50 backdrop-blur-sm transition-background-color duration-100 backface-hidden data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn",
          overlayClassName,
        )}
      />
      <RadixDialogContent
        className={cn(
          modalVariants({ position }),
          "max-h-[85dvh] overflow-y-auto data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn",
          className,
        )}
        {...restProps}
      >
        <>
          {!hideClose && (
            <div className="absolute right-6 top-6 z-50 overflow-visible">
              <RadixDialogClose asChild>
                <XMarkIcon className="ml-auto size-6 cursor-pointer text-gray-900" />
              </RadixDialogClose>
            </div>
          )}
          {children}
        </>
      </RadixDialogContent>
    </RadixDialogPortal>
  );
}

function RootComponent({
  onOpenChange,
  children,
  open,
  ...restProps
}: RootComponentProps) {
  const handleOpenChange = (modalChange: boolean) => {
    onOpenChange?.(modalChange);
  };

  return (
    <RadixDialogRoot open={open} onOpenChange={handleOpenChange} {...restProps}>
      {children}
    </RadixDialogRoot>
  );
}

const Modal = Object.assign(ModalComponent, {
  Root: RootComponent,
  Close: RadixDialogClose,
  Trigger: RadixDialogTrigger,
  Title: RadixDialogTitle,
});

export default Modal;
