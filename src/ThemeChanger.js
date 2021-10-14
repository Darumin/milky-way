import * as React from 'react';
import './ThemeChanger.css';

const ThemeChanger = (props) => {
  const { darkTheme, setDarkTheme } = props;

  const drillUp = () => {
    setDarkTheme(!darkTheme);
  };

  return(
    <>
    <label class="switch">
      <input onChange={drillUp} type="checkbox" />
      <span class="slider round"></span>
    </label>
    <span className="symbol">{(
        () => {
          if(darkTheme) {
            return '☪';
          } else {
            return '☼';
          }
        }
    )()}</span>
    </>
  );
};

export default ThemeChanger;