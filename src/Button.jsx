import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Função utilitária para misturar classes do Tailwind sem conflito
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Button({ variant = 'primary', className, children, ...props }) {
  const variants = {
    primary: 'bg-primary-brand text-white hover:shadow-[0_0_20px_rgba(123,77,255,0.4)] border-transparent uppercase tracking-wider',
    secondary: 'bg-transparent border border-tech-blue/50 text-white hover:bg-tech-blue/10 uppercase tracking-wider',
  };

  return (
    <button
      className={cn(
        'px-8 py-4 rounded-full font-medium transition-all duration-300 text-sm md:text-base cursor-pointer active:scale-95 flex items-center justify-center gap-2',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}