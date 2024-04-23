import axios from "axios";

const URL_TOP_TRACK = 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5'

export function getTopTrack(token: string){

    const fetchAPI = async() => {
        try{
            const response = await axios.get(URL_TOP_TRACK, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
    
            const data = await response.data;
            return data;
        }catch(error){
            return error;
        }
    }

    return fetchAPI;
};