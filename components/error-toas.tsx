"use client"
import React from 'react';
import { useToast } from './ui/use-toast';

function useErrorToast() {
  const { toast } = useToast();

  const showError = (message: string) => {
    toast({
      variant: "destructive",
      title: "Ошибка",
      description: message,
      action: <button>Попробуйте снова</button>, // кастомная кнопка, если нужна
    });
  };

  return showError;
}

export default useErrorToast;
