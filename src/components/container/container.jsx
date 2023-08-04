import './container.scss';

function Container({ className = '', tag = 'div', children, ...rest }) {
  const CustomTag = tag;

  return <CustomTag className={`container ${className}`} {...rest}>{children}</CustomTag>;
}

export default Container;
