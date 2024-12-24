import React from 'react';

interface DecorativeLineProps {
  children: React.ReactNode;
  className?: string;
}

export function DecorativeLine({ children, className = "" }: DecorativeLineProps) {
  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      <div className="flex-1 h-px bg-emerald-600"></div>
      {children}
      <div className="flex-1 h-px bg-emerald-600"></div>
    </div>
  );
}