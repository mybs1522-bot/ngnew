import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CountryConfig, getCountryConfig, detectCountry, DEFAULT_COUNTRY } from './countryConfig';

interface CountryContextType {
  country: CountryConfig;
  isLoading: boolean;
}

const CountryContext = createContext<CountryContextType>({
  country: getCountryConfig(DEFAULT_COUNTRY),
  isLoading: true,
});

export const useCountry = () => useContext(CountryContext);

export const CountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    detectCountry().then(code => {
      setCountryCode(code);
      setIsLoading(false);
    });
  }, []);

  return (
    <CountryContext.Provider value={{ country: getCountryConfig(countryCode), isLoading }}>
      {children}
    </CountryContext.Provider>
  );
};
