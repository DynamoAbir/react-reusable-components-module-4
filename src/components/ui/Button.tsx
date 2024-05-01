import cn from "../../utils/cn";
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
type TVariant = "solid" | "ghost" | "outline";
type TButtonOptions = {
  variant?: TVariant;
};
type TRef = HTMLButtonElement;
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;
const Button = forwardRef<TRef, TButton>(
  ({ className, variant = "solid", children, ...rest }: TButton, ref) => {
    const getVariant = (variant: string) => {
      switch (variant) {
        case "outline":
          return "btn-outline";

        case "ghost":
          return "btn-ghost";

        default:
          return "btn-solid";
      }
    };

    return (
      <button
        {...rest}
        ref={ref}
        className={cn(getVariant(variant), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
