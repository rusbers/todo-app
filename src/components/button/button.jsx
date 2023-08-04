import './button.scss';

function Button(props) {

  const {className, children, ...rest} = props; 

  const styles = className ? `${props.className} btn` : 'btn';

  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
}

export default Button;
