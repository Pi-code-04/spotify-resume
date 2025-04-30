import { useRef, useEffect } from "react";
import { useAudio } from "@/hooks/useAudio";
import enhancedAudio from "@assets/example-enhanced-x3Jp1CAatlyKXsqG (1).mp3";

interface AudioControlsProps {
  visible?: boolean;
}

const AudioControls = ({ visible = true }: AudioControlsProps) => {
  const bgAudioRef = useRef<HTMLAudioElement>(null);
  const introAudioRef = useRef<HTMLAudioElement>(null);
  const { registerAudio } = useAudio();

  useEffect(() => {
    if (bgAudioRef.current) {
      registerAudio(bgAudioRef.current);
    }
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
      />
      <audio
        id="introAudio"
        ref={introAudioRef}
        preload="auto"
        src={enhancedAudio}
      />
    </div>
  );
};

export default AudioControls;
