import React, {useState} from "react";
import {TProps} from '../Types/Types';
const Context = React.createContext( 'light');

const ThemeContextProvider:React.FC<TProps> = ({children}) => {
    const [theme, setTheme] = useState("light");
    const [isTournament, setIsTournament] = useState(true);
    const switchTheme = () => {
        setIsTournament((prev) => !prev);
        setTheme(isTournament ? 'light' : 'dark');
    };
    // React.useEffect(() =>{
    //     switchTheme();
    // }, []);
    // console.log(theme);
    // console.log(isTournament);
    // const switchTheme = (prevState) => {
    //     theme === "light" ? setTheme("dark") : setTheme("light");
    // };
    const value: any = {
        theme,
        switchTheme,
        setTheme,
        isTournament,
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export {ThemeContextProvider, Context as ThemeContext};