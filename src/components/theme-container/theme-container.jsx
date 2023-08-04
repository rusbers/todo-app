import './theme-container.scss';

import { useContext } from 'react';
import { ThemeContext } from '../../context/theme-context-provider';

function ThemeContainer({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='theme-container' data-theme={theme}>
      {children}
    </div>
  );
}

export default ThemeContainer;
