import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CountryConfig, getCountryConfig, detectCountry, DEFAULT_COUNTRY, COUNTRIES } from './countryConfig';

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
  const [countryCode, setCountryCode] = useState(() => {
    try {
      localStorage.removeItem('user_country');
      const urlParams = new URLSearchParams(window.location.search);
      const urlCountry = urlParams.get('country')?.toUpperCase();
      if (urlCountry && COUNTRIES[urlCountry]) {
        return urlCountry;
      }
    } catch {}
    return DEFAULT_COUNTRY;
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlCountry = urlParams.get('country')?.toUpperCase();
    if (urlCountry && COUNTRIES[urlCountry]) {
      setCountryCode(urlCountry);
      setIsLoading(false);
      return;
    }

    detectCountry().then(code => {
      setCountryCode(code || DEFAULT_COUNTRY);
      setIsLoading(false);
    });
  }, []);

  return (
    <CountryContext.Provider value={{ country: getCountryConfig(countryCode), isLoading }}>
      {children}
    </CountryContext.Provider>
  );
};
