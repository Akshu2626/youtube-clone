import axios from "axios";

const keyy = 'bec631e130mshff45ae0a47311ffp1c505ejsn4c8afd18d8d6';

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': keyy,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};


export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}

