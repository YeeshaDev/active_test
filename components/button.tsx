import type { ComponentPropsWithoutRef } from "react";
import cv from "@/utils/tailwind/cv";
import cn from "@/utils/tailwind/cn";
import type VariantProps from "@/types/variant-props";
import type SvgIcon from "@/types/svg-icon";
import type PropsWithRequiredChildren from "@/types/props-with-required-children";

const buttonVariants = cv(
  "inline-flex select-none items-center justify-center gap-x-1 rounded-lg font-semibold outline-none drop-shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:bg-gray-200 disabled:text-gray-500",
  {
    variants: {
      size: {
        small: "text-3 px-3 py-2",
        medium: "text-2 px-4 py-2.5",
      },
    },
  },
);

const buttonIconVariants = cv({
  variants: {
    size: {
      small: "size-4 shrink-0",
      medium: "size-6 shrink-0",
    },
  },
});

export interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants>,
    VariantProps<typeof buttonIconVariants> {
  readonly leftIcon?: SvgIcon;
  readonly rightIcon?: SvgIcon;
  readonly className?: string;
  readonly disabled?: boolean;
  readonly isLoading?: boolean;
}

export default function Button({
  size = "medium",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  isLoading,
  disabled,
  className,
  children,
  ...restProps
}: PropsWithRequiredChildren<ButtonProps>) {
  return (
    <button
      className={cn(buttonVariants({ size }), className)}
      disabled={isLoading ? true : disabled}
      {...restProps}
    >
      <div className="inline-flex items-center justify-center gap-x-2">
        {LeftIcon && (
          <LeftIcon
            className={buttonIconVariants({ size })}
            aria-hidden="true"
          />
        )}
        <span>{children}</span>
        {RightIcon && (
          <RightIcon
            className={buttonIconVariants({ size })}
            aria-hidden="true"
          />
        )}
      </div>
    </button>
  );
}
