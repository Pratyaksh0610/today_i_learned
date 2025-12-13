import { ThemeContext } from "../../context/theme-context";
import styles from "./Brick.module.css";
import { useContext, useEffect, useRef } from "react";

export default function Brick() {
  const inputRef = useRef(null);
  const {isDarkMode, toggleTheme} = useContext(ThemeContext);
  useEffect(() => {
    console.log("MOUNTED BRICK");
    inputRef.current && inputRef.current.focus();
    return () => {
      console.log("UNMOUNTED BRICK");
    };
  }, [inputRef]);
  return (
    <div className={styles.parentContainer} style={isDarkMode?{'background':'red','color':'blue'}:{}}>
      <p className={styles.text}>BRICK PAW</p>
      <input type="text" placeholder="Hello" ref={inputRef} />
      <button onClick={()=>toggleTheme()}>CHANGE THEME</button>
    </div>
  );
}
