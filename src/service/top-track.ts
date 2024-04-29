const URL_TOP_TRACK = 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5'

export async function getTopTrack(token: string){
    try{
        const response = await fetch(URL_TOP_TRACK, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        return await response.json();
    }catch(error){
        console.log("ERROR", error)
        return error;
    }
};