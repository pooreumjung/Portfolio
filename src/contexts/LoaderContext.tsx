"use client";

import { createContext, useContext, type ReactNode } from "react";

interface LoaderContextType {
  isLoaded: boolean;
}

const LoaderContext = createContext<LoaderContextType>({ isLoaded: false });

export function LoaderProvider({
  children,
  isLoaded,
}: {
  children: ReactNode;
  isLoaded: boolean;
}) {
  return <LoaderContext.Provider value={{ isLoaded }}>{children}</LoaderContext.Provider>;
}

export function useLoader() {
  return useContext(LoaderContext);
}
