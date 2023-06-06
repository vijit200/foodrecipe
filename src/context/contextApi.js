import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";
export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("paneer");
    const [mobileMenu, setMobileMenu] = useState(false);
    const [modal,setModal] =useState(false);
    const [dishname,setDishName]= useState()

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApi(query).then(({data})=>{
            setSearchResults(data)
            console.log(data);
        })
         setLoading(false);
       
    };

    

    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu,
                modal,
                setModal,
                dishname,
                setDishName
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
