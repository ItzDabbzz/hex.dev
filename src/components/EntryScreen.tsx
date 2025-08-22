'use client';

interface EntryScreenProps {
  show: boolean;
  onEnter: () => void;
}

export default function EntryScreen({ show, onEnter }: EntryScreenProps) {
  if (!show) return null;

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-[10px] flex justify-center items-center z-[1000] cursor-pointer transition-all duration-600"
      onClick={onEnter}
    >
      <div className="font-inter font-medium text-white text-[28px] text-center select-none py-5 px-10 border border-transparent rounded-lg bg-transparent transition-all duration-300 hover:border-[rgba(180,190,254,0.5)] hover:-translate-y-0.5">
        Click to Enter
      </div>
    </div>
  );
}
