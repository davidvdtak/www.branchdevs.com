import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ErrorContextProps {
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const ErrorContext = createContext<ErrorContextProps | undefined>(undefined);

export const useError = (): ErrorContextProps => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};

interface ErrorProviderProps {
  children: ReactNode;
}

export const ErrorProvider: React.FC<ErrorProviderProps> = ({ children }) => {
  const [error, setError] = useState(false);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};