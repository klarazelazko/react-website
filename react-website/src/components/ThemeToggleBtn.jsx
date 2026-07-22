import assets from '../assets/assets';
import React, {useEffect} from 'react';

const ThemeToggleBtn = ({ theme, setTheme }) => {

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
  }, [])

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Przełącz motyw"
      className="size-9 p-1.5 border border-gray-500 rounded-full cursor-pointer"
    >
      <img src={theme === 'dark' ? assets.sun_icon : assets.moon_icon} alt="" />
    </button>
  );
};

export default ThemeToggleBtn;