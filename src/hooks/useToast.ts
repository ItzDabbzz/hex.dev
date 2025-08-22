import { useState, useCallback } from 'react';

interface ToastState {
  show: boolean;
  title: string;
  message: string;
  type: string;
}

export function useToast() {
  const [toast, setToast] = useState<ToastState>({
    show: false,
    title: '',
    message: '',
    type: ''
  });

  const showToast = useCallback((title: string, message: string, type: string = 'default') => {
    setToast({ show: true, title, message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast(prev => ({ ...prev, show: false }));
  }, []);

  const copyToClipboard = useCallback(async (text: string, title: string, type: string = 'default') => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    try {
      await navigator.clipboard.writeText(text);
      showToast(title, text, type);
    } catch (err) {
      // Fallback for older browsers
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast(title, text, type);
      } catch (fallbackErr) {
        console.error('Failed to copy to clipboard:', fallbackErr);
        showToast('Copy Failed', 'Please copy manually: ' + text, 'error');
      }
    }
  }, [showToast]);

  return {
    toast,
    showToast,
    hideToast,
    copyToClipboard
  };
}
