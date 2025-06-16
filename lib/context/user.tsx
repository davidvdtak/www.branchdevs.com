"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Socials = {
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
};

type User = {
  id: string;
  fullName: string;
  email: string;
  avatar: string;
  biography: string;
  socials: Socials;
  subscription: string;
};

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;  
  setReload: (reload: boolean) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch("/api/auth/profile");
        if (!response.ok) throw new Error("Failed to fetch profile");
        const data: User = await response.json();
        setUser(data);
      } catch (error) { }
    }

    if (reload) {
      setReload(false);
      fetchUser();
    }
  }, [reload]);

  return (
    <UserContext.Provider value={{ user, setUser, setReload }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
}
