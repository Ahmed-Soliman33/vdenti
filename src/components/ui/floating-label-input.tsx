import React from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

export interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  helperText?: string;
  error?: string;
  dir?: "ltr" | "rtl";
}

const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(
  (
    {
      label,
      icon: Icon,
      helperText,
      error,
      dir = "rtl",
      className,
      value,
      ...props
    },
    ref
  ) => {
    const hasValue = value !== undefined && value !== "";
    const isRTL = dir === "rtl";

    return (
      <div className="relative w-full">
        {/* Input Container */}
        <div className="relative">
          {/* Icon */}
          {Icon && (
            <Icon
              className={cn(
                "absolute top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none z-10",
                isRTL ? "right-4" : "left-4"
              )}
            />
          )}

          {/* Input Field */}
          <Input
            ref={ref}
            value={value}
            dir={dir}
            className={cn(
              "peer h-12 w-full rounded-lg border border-gray-200 bg-white",
              "px-4 pt-6 pb-2 text-base text-gray-900",
              "transition-all duration-200 ease-in-out",
              "placeholder:text-transparent",
              "hover:border-gray-300",
              "focus:border-primary focus:ring-1 focus:ring-primary/10",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/10",
              Icon && (isRTL ? "pr-11" : "pl-11"),
              error &&
                "border-red-500 focus:border-red-500 focus:ring-red-500/10",
              className
            )}
            {...props}
          />

          {/* Floating Label */}
          <label
            className={cn(
              "absolute top-1/2 -translate-y-1/2 text-gray-600",
              "transition-all duration-200 ease-in-out",
              "pointer-events-none",
              "peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-900 peer-focus:-translate-y-0",
              hasValue && "top-2 text-xs text-gray-900 -translate-y-0",
              Icon && (isRTL ? "right-11" : "left-11"),
              !Icon && (isRTL ? "right-4" : "left-4"),
              // RTL positioning when floating
              hasValue && isRTL && "right-4",
              hasValue && !isRTL && "left-4",
              "peer-focus:right-4 peer-focus:left-auto" + (isRTL ? "" : ""),
              !isRTL && "peer-focus:left-4 peer-focus:right-auto"
            )}
          >
            {label}
          </label>
        </div>

        {/* Helper Text or Error Message */}
        {(helperText || error) && (
          <p
            className={cn(
              "mt-1 text-xs",
              error ? "text-red-600" : "text-gray-500",
              isRTL ? "text-right" : "text-left"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingLabelInput };
