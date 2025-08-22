import React from 'react';

interface LinkButtonProps {
  href?: string;
  onClick?: () => void;
  icon: React.ReactNode;
  label: string;
  iconColor?: string;
  className?: string;
}

export default function LinkButton({ 
  href, 
  onClick, 
  icon, 
  label, 
  iconColor = "text-[#e0e0e0]",
  className = ""
}: LinkButtonProps) {
  const baseClasses = "flex items-center justify-center gap-3 text-[#c0caf5] no-underline text-sm transition-all duration-300 py-2.5 px-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] relative overflow-hidden hover:translate-x-[3px] hover:bg-white/[0.08] hover:border-white/[0.15] before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/[0.05] before:to-transparent before:transition-all before:duration-400 hover:before:left-full";
  
  const content = (
    <>
      <span className={`w-4.5 h-4.5 flex items-center justify-center flex-shrink-0 ${iconColor}`}>
        {icon}
      </span>
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} cursor-pointer ${className}`}
    >
      {content}
    </button>
  );
}
