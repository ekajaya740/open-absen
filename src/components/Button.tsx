import { ButtonHTMLAttributes, FC, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>  { 
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const buttonVariants = cva(
  "",
  {
    variants: {
      variant: {
        filled: '',
        outlined: '',
        text: '',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      }
    }
  },
)

const Button : FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps >(({className, size, variant, ...props},ref) => {
  return (
    <button ref={ref} className={
      cn(buttonVariants({variant, size, className}))
    } {...props} />
  )
})

Button.displayName="Button"

export {Button, buttonVariants}