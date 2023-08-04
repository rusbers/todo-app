import './box.scss';

function Box(props) {
  const { tag = 'div', radius, pl, className, children, reference, ...rest } = props;
  const CustomTag = tag;

  const boxClasses = {
    box: 'box',
    borderRadius: radius ? 'box--border-rad' : '',
    paddingLeft: pl ? 'box--pl' : '',
    customClasses: className ? className : '',
  };

  const boxStyle = Object.values(boxClasses).join(' ').trim();

  return (
    <CustomTag ref={reference} className={boxStyle} {...rest}>
      {children}
    </CustomTag>
  );
}

export default Box;
