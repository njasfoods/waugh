'use client'
import { createContext, useContext, useState } from 'react';

const MobileMenuContext = createContext();

export function useMobileMenu() {
  return useContext(MobileMenuContext);
}

export function MobileMenuProvider({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    console.log("object")
  };

  const value = {
    mobileMenuOpen,
    toggleMobileMenu,
  };

  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  );
}
