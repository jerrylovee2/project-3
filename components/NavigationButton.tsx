import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, onClick }) => {
  const baseClasses = "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300";
  const styles = {
    prev: "bg-green-100 hover:bg-green-200",
    next: "bg-green-600 hover:bg-green-700 text-white"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${styles[direction]}`}
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
    >
      {direction === 'prev' ? (
        <ChevronLeft className="w-6 h-6" />
      ) : (
        <ChevronRight className="w-6 h-6" />
      )}
    </button>
  );
};

export default NavigationButton;