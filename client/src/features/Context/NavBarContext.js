import { useState, useContext, createContext, useEffect } from "react";

const NavBarContext = createContext();

// This syntax is to create custom hooks
export const useNavBar = () => useContext(NavBarContext);

function NavBarContextProvider(props) {
  const active = {
    color: "#f0860c",
  };
//   #f0860c
  const inActive = {
    color: "#000",
  };

  const paths = ["/", "/about", "/works", "/blog", "/contact"];

//   useEffect(()=>{
   
  

//   },[])
 const [path, setPath] = useState(paths)

  const [color1, setColor1] = useState(active);
  const [color2, setColor2] = useState(inActive);
  const [color3, setColor3] = useState(inActive);
  const [color4, setColor4] = useState(inActive);
  const [color5, setColor5] = useState(inActive);
  const [color, setColor] = useState("#fff");

  

  

 

  const changeColor = (param) => {
    switch (param) {
      case "home":
        setColor1(active);
        setColor2(inActive);
        setColor3(inActive);
        setColor4(inActive);
        setColor5(inActive);
        setPath(paths[0]);
        break;
      case "about":
        setColor1(inActive);
        setColor2(active);
        setColor3(inActive);
        setColor4(inActive);
        setColor5(inActive);
        setPath(paths[1]);
        break;
      case "works":
        setColor1(inActive);
        setColor2(inActive);
        setColor3(active);
        setColor4(inActive);
        setColor5(inActive);
        break;
      case "blog":
        setColor1(inActive);
        setColor2(inActive);
        setColor3(inActive);
        setColor4(active);
        setColor5(inActive);
        break;
      case "contact":
        setColor1(inActive);
        setColor2(inActive);
        setColor3(inActive);
        setColor4(inActive);
        setColor5(active);
        break;

      default:
        setColor1(active);
        setColor2(inActive);
        setColor3(inActive);
        setColor4(inActive);
        setColor5(inActive);
    }
  };

  //logics
  const value = {
    color1,
    color2,
    color3,
    color4,
    color5,
    path,
    color,
   
    changeColor,
    
  };
  return (
    <NavBarContext.Provider value={value}>
      {props.children}
    </NavBarContext.Provider>
  );
}

export default NavBarContextProvider;
