// This function is a wrapper around `twMerge` from 'tailwind-merge' and to
// make it easier to use.

// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import type { ClassNameValue } from "tailwind-merge";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge<"text" | "customTypography">({
  extend: {
    classGroups: {
      customTypography: [
        "title-1",
        "title-2",
        "title-3",
        "title-4",
        "label",
        "text-1",
        "text-2",
        "text-3",
        "description",
        "badge",
      ],
    },
    conflictingClassGroups: {
      customTypography: ["text"],
    },
  },
});

export default function cn(...classLists: ClassNameValue[]) {
  return twMerge(...classLists);
}
