import './theme-switcher.scss';
import Button from '../button/button';

import { useContext } from 'react';
import { ThemeContext } from '../../context/theme-context-provider';

function ThemeSwitcher() {
  const { switchTheme } = useContext(ThemeContext);

  return <Button className='theme-switcher' onClick={switchTheme} />;
}

export default ThemeSwitcher;
