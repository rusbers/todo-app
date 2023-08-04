import './content-wrapper.scss';

function ContentWrapper({children}) {
  return <>{children}</>
}

function Top({children}) {
  return <div className='content-wrapper-top'>{children}</div>
}

function Bottom({ children }) {
  return <div className='content-wrapper-bottom'>{children}</div>;
}

ContentWrapper.Top = Top;
ContentWrapper.Bottom = Bottom;

export default ContentWrapper;