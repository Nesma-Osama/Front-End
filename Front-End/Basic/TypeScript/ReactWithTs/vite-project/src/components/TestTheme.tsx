import { useThemeContext,ThemeContextType } from "../context";
export default function TestTheme() {
  const themeContext:ThemeContextType = useThemeContext();
  return (
    <>
      <h3>{themeContext.theme}</h3>
      <input type="text" onChange={(e)=>themeContext.changeTheme(e.target.value)} />
    </>
  );
}
