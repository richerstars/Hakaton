// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { linksToTournament, linksToCup } from '../constants/linksForNav';
//
// type TProps = {
//     children: React.ReactNode
// };
//
// type TButton = {
//     id: number,
//     url: string,
//     title: string,
// }
//
// type TValue = {
//         links: Array<TButton>,
//         setLinks: (value: Array<TButton>) => void,
//         isTournament: boolean,
//         setIsTournament:(value: boolean) => void,
//         handleChangeMode: () => void,
// }
//
// export const NavigateContext = React.createContext<TValue>({
//     links: [],
//     setLinks: () => {},
//     isTournament: true,
//     setIsTournament:() => {},
//     handleChangeMode: () => {}
// });
//
// const NavigateProvider: React.FC<TProps> = ({ children}) => {
//     const [links, setLinks] = useState(linksToTournament);
//     const [isTournament, setIsTournament] = useState(true);
//     const  navigate  = useNavigate();
//
//     const handleChangeMode = () => {
//         setIsTournament((prev) => !prev);
//         navigate(isTournament ? '/openCap' : '/openTournament');
//     };
//
//     React.useEffect(() =>{
//         setLinks(() => isTournament ? linksToTournament : linksToCup);
//     }, [isTournament]);
//
//     const value: TValue = {
//         links,
//         setLinks,
//         isTournament,
//         setIsTournament,
//         handleChangeMode
//     };
//
//     return <NavigateContext.Provider value={value}>
//         {children}
//     </NavigateContext.Provider>;
//
// };
//
// export default NavigateProvider;
// @ts-ignore
// @ts-ignore
import React from 'react';

const NavigateContext = () => {
    return (
        <div>
            
        </div>
    );
};

export default NavigateContext;