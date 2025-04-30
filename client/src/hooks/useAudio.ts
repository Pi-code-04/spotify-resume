import { useState, useRef, useEffect, useCallback } from "react";
import { create } from "zustand";

interface AudioStore {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  progress: number;
  audioElement: HTMLAudioElement | null;
  analyser: AnalyserNode | null;
  dataArray: Uint8Array | null;
  setIsPlaying: (isPlaying: boolean) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  setProgress: (progress: number) => void;
  setAudioElement: (audio: HTMLAudioElement | null) => void;
  setAnalyser: (analyser: AnalyserNode | null) => void;
  setDataArray: (dataArray: Uint8Array | null) => void;
}

const useAudioStore = create<AudioStore>((set) => ({
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  progress: 0,
  audioElement: null,
  analyser: null,
  dataArray: null,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentTime: (currentTime) => set({ currentTime }),
  setDuration: (duration) => set({ duration }),
  setProgress: (progress) => set({ progress }),
  setAudioElement: (audioElement) => set({ audioElement }),
  setAnalyser: (analyser) => set({ analyser }),
  setDataArray: (dataArray) => set({ dataArray }),
}));

export const useAudio = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const audioIntervalRef = useRef<number | null>(null);
  
  const {
    isPlaying,
    currentTime,
    duration,
    progress,
    audioElement,
    analyser,
    dataArray,
    setIsPlaying,
    setCurrentTime,
    setDuration,
    setProgress,
    setAudioElement,
    setAnalyser,
    setDataArray
  } = useAudioStore();

  const registerAudio = useCallback((audio: HTMLAudioElement) => {
    setAudioElement(audio);
    
    const updateAudioState = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration || 0);
        setProgress((audio.currentTime / (audio.duration || 1)) * 100);
      }
    };
    
    audio.addEventListener('loadedmetadata', updateAudioState);
    audio.addEventListener('timeupdate', updateAudioState);
    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));
    
    return () => {
      audio.removeEventListener('loadedmetadata', updateAudioState);
      audio.removeEventListener('timeupdate', updateAudioState);
      audio.removeEventListener('play', () => setIsPlaying(true));
      audio.removeEventListener('pause', () => setIsPlaying(false));
    };
  }, [setAudioElement, setCurrentTime, setDuration, setIsPlaying, setProgress]);

  const togglePlay = useCallback(() => {
    if (!audioElement) return;
    
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
  }, [audioElement, isPlaying]);

  const setProgressManually = useCallback((newProgress: number) => {
    if (!audioElement) return;
    
    const newTime = (newProgress / 100) * (audioElement.duration || 0);
    audioElement.currentTime = newTime;
    setProgress(newProgress);
  }, [audioElement, setProgress]);

  const startAudio = useCallback(() => {
    if (!audioElement) return;
    
    if (!isPlaying) {
      audioElement.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
    
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        
        // Only create the source if it doesn't exist
        if (!sourceRef.current) {
          sourceRef.current = audioContextRef.current.createMediaElementSource(audioElement);
          
          const analyzerNode = audioContextRef.current.createAnalyser();
          analyzerNode.fftSize = 256;
          
          sourceRef.current.connect(analyzerNode);
          analyzerNode.connect(audioContextRef.current.destination);
          
          const bufferLength = analyzerNode.frequencyBinCount;
          const dataBuffer = new Uint8Array(bufferLength);
          
          setAnalyser(analyzerNode);
          setDataArray(dataBuffer);
        }
      }
    } catch (error) {
      console.error("Error setting up audio context:", error);
    }
  }, [audioElement, isPlaying, setAnalyser, setDataArray]);

  const playIntro = useCallback(() => {
    const introAudio = document.getElementById('introAudio') as HTMLAudioElement;
    
    if (introAudio) {
      try {
        // Make sure intro audio is ready to play
        introAudio.currentTime = 0;
        introAudio.volume = 1.0;
        
        // Play background music at lower volume if not already playing
        if (audioElement && !isPlaying) {
          audioElement.volume = 0.3;
          audioElement.play().catch(error => {
            console.error("Error playing background audio:", error);
          });
        }
        
        // Play the intro audio with a small delay
        setTimeout(() => {
          introAudio.play().catch(error => {
            console.error("Error playing intro audio:", error);
          });
        }, 300);
      } catch (error) {
        console.error("Error in playIntro function:", error);
      }
    } else {
      console.error("Intro audio element not found");
    }
  }, [audioElement, isPlaying]);

  useEffect(() => {
    return () => {
      if (audioIntervalRef.current) {
        clearInterval(audioIntervalRef.current);
      }
      
      if (sourceRef.current) {
        sourceRef.current.disconnect();
      }
      
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
    };
  }, []);

  return {
    isPlaying,
    currentTime,
    duration,
    progress,
    analyser,
    dataArray,
    registerAudio,
    togglePlay,
    setProgress: setProgressManually,
    startAudio,
    playIntro
  };
};
