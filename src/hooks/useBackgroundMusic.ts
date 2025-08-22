import { useEffect, useRef } from 'react';

export function useBackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Only run on client side to avoid hydration mismatch
    if (typeof window === 'undefined') return;
    
    // Create audio element programmatically to avoid CORS issues
    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0.3;
    
    // Using the local MP3 file
    audio.src = '/The King\'s Affirmation.mp3';
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log('Audio playback failed:', err);
      });
    }
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return { playMusic, stopMusic };
}
