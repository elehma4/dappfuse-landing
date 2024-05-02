// hooks/useRequestDemo.js
import { useState } from 'react';

interface FormResponse {
  message: string;
}

export function useRequestDemo() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await fetch(`https://ops.dappfuse.com/web/requestDemo?email=${encodeURIComponent(email)}`);
      const data: FormResponse = await response.json();

      if (response.ok) {
        setSuccessMessage('Request submitted successfully!');
      } else {
        setErrorMessage(data.message || 'An error occurred while processing your request.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while processing your request.');
    }
  };

  return {
    setEmail,
    handleSubmit,
    errorMessage,
    successMessage
  };
}
