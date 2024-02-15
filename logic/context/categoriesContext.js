import { createContext } from "react";

export const categoriesContext = createContext();

// export default function CategoriesContext({ children }) {
//     const [categories, setCategories] = useState([]);
  
//     return (
//       <categoriesContext.Provider value={{ categories, setCategories }}>
//         {children}
//       </categoriesContext.Provider>
//     );
//   }
  