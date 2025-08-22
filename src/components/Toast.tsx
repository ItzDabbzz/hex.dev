'use client';

import { useEffect } from 'react';
import { FaDiscord } from 'react-icons/fa';

interface ToastProps {
  show: boolean;
  title: string;
  message: string;
  type: string;
  onHide: () => void;
}

export default function Toast({ show, title, message, type, onHide }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onHide, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  return (
    <div className={`fixed right-8 top-1/2 transform -translate-y-1/2 ${show ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'} bg-black/90 backdrop-blur-md border border-white/10 rounded-lg py-6 px-6 text-white font-inter text-sm z-[2000] transition-all duration-300 ease-out shadow-lg min-w-[320px] max-w-md`}>
      <div className="flex items-center gap-4">
        <div className={`w-6 h-6 flex-shrink-0 flex items-center justify-center ${type === 'discord' ? 'text-[#7289DA]' : 'text-[#FF6600]'}`}>
          {type === 'discord' ? (
            <FaDiscord className="w-4 h-4"/>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" className="w-4 h-4">
              <path fill="currentColor" d="M160 400V192l159 159 161-159v208h75A249 249 0 0 0 320 72 248 248 0 0 0 85 400h75Z"/>
              <path fill="currentColor" d="M424 448h108a248 248 0 0 1-424 0h108V320l104 105 104-105v128Z"/>
            </svg>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-white font-medium text-base">{title}</div>
          <div className="text-gray-400 text-sm font-mono break-all">{message}</div>
        </div>
      </div>
    </div>
  );
}
