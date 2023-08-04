import './app-header.scss';
import Logo from '../logo/logo';
import ThemeSwitcher from '../theme-switcher/theme-switcher';

function AppHeader() {
  return (
    <header className='header'>
        <div className='header__inner'>
          <Logo />
          <ThemeSwitcher />
        </div>
    </header> 
  );
}

export default AppHeader;