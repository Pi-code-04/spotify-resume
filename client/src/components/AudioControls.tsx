import { useRef, useEffect } from "react";
import { useAudio } from "@/hooks/useAudio";

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
        src="https://cdn1.genspark.ai/user-upload-image/3/d28f08ad-9f79-4a9d-8336-ad91255c813d.mp3"
      />
      <audio
        id="introAudio"
        ref={introAudioRef}
        preload="auto"
        src="https://cdn1.genspark.ai/user-upload-image/1/728504f7-961c-4ee7-b171-290128ea5b96.mp3"
      />
    </div>
  );
};

export default AudioControls;
