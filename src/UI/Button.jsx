import React from 'react';
import { cva } from 'class-variance-authority';

const buttonVariant = cva(
  "inline-flex items-center justify-center rounded-md font-medium",
  {
    variants: {
      variant: {
        primary: "bg-orange-600 text-white hover:bg-orange-700 shadow",
        outline: "border border-input bg-background hover:bg-accent hover:text-orange-600",
      },
      size: {
        default: "h-[40px] px-[16px] py-[8px] text-sm",
        sm: "h-[32px] px-[12px] text-xs",
        lg: "h-[48px] px-[20px] text-base",
        icon: "h-[36px] w-[36px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = ({
    children,
    variant = "primary", 
    size = 'default',
    className = "",
    ...props
}) => {

    return (
        
        <button className={`${buttonVariant({variant, size})}, ${className}`} 
        {...props}>
            {children}
        </button>
        
    )
}

export default Button;