import React, { useState, useEffect, useContext, createContext } from "react";

import { fetchDataFromApi } from '../utils/api';

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setloading] = useState(false)
    const [searchResult, setsearchResult] = useState(false || [])
    const [selectCategories, setselectCategories] = useState('New')
    const [mobileMenu, setmobileMenu] = useState(false)

    useEffect(() => {
        fetchSelectedCategoryData(selectCategories);
    }, [selectCategories]);

    const fetchSelectedCategoryData = (query) => {
        setloading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents);
            setsearchResult(contents);
            setloading(false)
        })


    }

    return (
        <Context.Provider value={{
            loading, setloading, searchResult, setsearchResult, selectCategories, setselectCategories, mobileMenu, setmobileMenu
        }}>


            {props.children}
        </Context.Provider>
    )

}











