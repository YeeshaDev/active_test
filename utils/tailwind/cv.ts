// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { cva } from "class-variance-authority";

type ClassVariantsConfig<T> = Parameters<typeof cva<T>>[1];

type ClassVariantsReturnType<T> = ReturnType<typeof cva<T>>;

// This is not a function, but a declaration of an overloaded function.
function cv<T>(config: ClassVariantsConfig<T>): ClassVariantsReturnType<T>;

// This is not a function, but a declaration of an overloaded function.
function cv<T>(
  base: string,
  config: ClassVariantsConfig<T>,
): ClassVariantsReturnType<T>;

function cv<T>(
  base: string | ClassVariantsConfig<T>,
  config?: ClassVariantsConfig<T>,
) {
  if (typeof base !== "string") {
    return cva("", base);
  }

  return cva(base, config);
}

export default cv;
