'use client';

import { useState } from 'react';
import EntryScreen from '@/components/EntryScreen';
import Toast from '@/components/Toast';
import Header from '@/components/Header';
import CanvasChart from '@/components/CanvasChart';
import ClientOnly from '@/components/ClientOnly';
import { useToast } from '@/hooks/useToast';
import { useBackgroundMusic } from '@/hooks/useBackgroundMusic';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import CombinedLinks from '@/components/CombinedLinks';

export default function Home() {
  const [showEntryScreen, setShowEntryScreen] = useState(true);
  const { toast, hideToast, copyToClipboard } = useToast();
  const { playMusic } = useBackgroundMusic();

  const handleEntryClick = () => {
    setShowEntryScreen(false);
    playMusic();
  };

  return (
    <>
      <ClientOnly>
        <BackgroundCanvas />

        <EntryScreen 
          show={showEntryScreen} 
          onEnter={handleEntryClick} 
        />

        <Toast 
          show={toast.show}
          title={toast.title}
          message={toast.message}
          type={toast.type}
          onHide={hideToast}
        />
      </ClientOnly>

      <div className="w-full min-h-screen flex flex-col items-center justify-center py-8">
        <div className="max-w-[900px] w-full px-6 relative z-10">
          <Header />

          {/* Separator */}
          <div className="h-px bg-[#333] my-6"></div>
      <br/>

          <CombinedLinks onCopyToClipboard={copyToClipboard} />
      <br/>

          {/* Separator */}
          <div className="h-px bg-[#333] my-6"></div>

      <br/><br/>
          {/* Real-time Chart */}
          <ClientOnly 
            fallback={
              <div className="bg-black/20 border border-white/10 rounded-xl p-4 mt-6 backdrop-blur-[10px]">
                <div className="w-full h-[250px] flex items-center justify-center text-[#c0caf5]">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Real-time Analytics</h3>
                    <p className="text-sm opacity-75">Loading chart...</p>
                  </div>
                </div>
              </div>
            }
          >
            <CanvasChart />
          </ClientOnly>
        </div>
      </div>
    </>
  );
}
