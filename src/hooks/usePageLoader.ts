import { useEffect, useState } from "react";

interface UsePageLoaderReturn {
  isLoading: boolean;
  handleLoadingComplete: () => void;
}

const MINIMUM_LOADING_TIME = 300; // ms - evita flash en conexiones rápidas
const FADE_OUT_DURATION = 500; // ms - duración del fade-out

export const usePageLoader = (): UsePageLoaderReturn => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [minimumTimePassed, setMinimumTimePassed] = useState(false);

  // Timer para el tiempo mínimo de visualización
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinimumTimePassed(true);
    }, MINIMUM_LOADING_TIME);

    return () => clearTimeout(timer);
  }, []);

  // Cuando ambas condiciones se cumplen, inicia el fade-out
  useEffect(() => {
    if (contentReady && minimumTimePassed) {
      // Espera la duración del fade-out antes de remover del DOM
      const fadeOutTimer = setTimeout(() => {
        setIsLoading(false);
      }, FADE_OUT_DURATION);

      return () => clearTimeout(fadeOutTimer);
    }
  }, [contentReady, minimumTimePassed]);

  const handleLoadingComplete = () => {
    setContentReady(true);
  };

  return {
    isLoading,
    handleLoadingComplete,
  };
};
