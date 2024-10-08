import { createContext, useContext } from "react";
export type ThemeContextType = {
  theme: string;
  changeTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) throw new Error("context must be not undefined");
  return context;
};
