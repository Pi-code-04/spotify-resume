import { useRef, useEffect, useState } from "react";
import { useAudio } from "@/hooks/useAudio";
import enhancedAudio from "@assets/example-enhanced-x3Jp1CAatlyKXsqG (1).mp3";

interface AudioControlsProps {
  visible?: boolean;
}

const AudioControls = ({ visible = true }: AudioControlsProps) => {
  const bgAudioRef = useRef<HTMLAudioElement>(null);
  const introAudioRef = useRef<HTMLAudioElement>(null);
  const { registerAudio } = useAudio();
  
  const [audioLoaded, setAudioLoaded] = useState({
    background: false,
    intro: false
  });

  // Register background audio with the audio context
  useEffect(() => {
    if (bgAudioRef.current) {
      registerAudio(bgAudioRef.current);
      
      // Add event listeners to debug audio issues
      bgAudioRef.current.addEventListener('canplaythrough', () => {
        console.log('Background audio loaded and can play');
        setAudioLoaded(prev => ({ ...prev, background: true }));
      });
      
      bgAudioRef.current.addEventListener('error', (e) => {
        console.error('Background audio error:', e);
      });
    }
    
    if (introAudioRef.current) {
      // Add event listeners to debug intro audio issues
      introAudioRef.current.addEventListener('canplaythrough', () => {
        console.log('Intro audio loaded and can play');
        setAudioLoaded(prev => ({ ...prev, intro: true }));
      });
      
      introAudioRef.current.addEventListener('error', (e) => {
        console.error('Intro audio error:', e);
      });
    }
    
    return () => {
      // Clean up event listeners
      if (bgAudioRef.current) {
        bgAudioRef.current.removeEventListener('canplaythrough', () => {});
        bgAudioRef.current.removeEventListener('error', () => {});
      }
      
      if (introAudioRef.current) {
        introAudioRef.current.removeEventListener('canplaythrough', () => {});
        introAudioRef.current.removeEventListener('error', () => {});
      }
    };
  }, [registerAudio]);

  if (!visible) return null;

  return (
    <div className="hidden">
      <audio
        id="bgMusic"
        ref={bgAudioRef}
        loop
        preload="auto"
        src={enhancedAudio}
        crossOrigin="anonymous"
      />
      
      <audio
        id="introAudio"
        ref={introAudioRef}
        preload="auto"
        src={enhancedAudio}
        crossOrigin="anonymous"
      />
      
      {/* Display audio loading status for debugging */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs p-2 z-50">
          BG Audio: {audioLoaded.background ? 'Loaded' : 'Loading...'}
          <br />
          Intro Audio: {audioLoaded.intro ? 'Loaded' : 'Loading...'}
        </div>
      )}
    </div>
  );
};

export default AudioControls;
