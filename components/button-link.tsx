import type { ComponentPropsWithoutRef } from "react";
import cn from "@/utils/cn";
import type PropsWithRequiredChildren from "@/types/props-with-required-children";
import Button from "./button";
import Link from "next/link";

export interface ButtonLinkProps
  extends ComponentPropsWithoutRef<typeof Link>,
    Pick<
      ComponentPropsWithoutRef<typeof Button>,
      "size" | "leftIcon" | "rightIcon"
    > {
  readonly href: string;
  readonly className?: string;
  readonly buttonProps?: Partial<ComponentPropsWithoutRef<typeof Button>>;
}

export default function ButtonLink({
  size,
  leftIcon,
  rightIcon,
  color,
  buttonProps: { className: buttonClassName, ...restButtonProps } = {},
  href,
  role = "link",
  className,
  children,
  ...restProps
}: PropsWithRequiredChildren<ButtonLinkProps>) {
  return (
    <Link
      className={className}
      href={href}
      role={role}
      tabIndex={-1}
      {...restProps}
    >
      <Button
        className={cn("w-full", buttonClassName)}
        color={color}
        size={size}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        {...restButtonProps}
      >
        {children}
      </Button>
    </Link>
  );
}
