'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import nookies from 'nookies';

const AdminAuthContext = createContext({});

export const AdminAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const token = nookies.get(null, 'token').token; // Fix token retrieval

    if (token) {
      // Call your API to verify the token
      fetch('/api/verifyToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.user) {
            setUser(data.user);
          } else {
            setUser(null);
          }
        })
        .catch(() => {
          setUser(null);
        })
        .finally(() => {
          setLoading(false); // Stop loading when the process is done
        });
    } else {
      setUser(null);
      setLoading(false);
    }
  }, []);

  return (
    <AdminAuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
