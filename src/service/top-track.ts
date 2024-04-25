const URL_TOP_TRACK = 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5'

export async function getTopTrack(token: string){

    try{
        const response = await fetch(URL_TOP_TRACK, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        const data = await response.json();
        return data;
    }catch(error){
        return error;
    }
};