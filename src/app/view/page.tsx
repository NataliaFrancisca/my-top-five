import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Viewer from "../components/Viewer/Viewer";
import { fetchUserToken } from "@/service/token";
import { getTopTrack } from "@/service/top-track";

export default async function Page(){
    const session = await getServerSession();

    if(!session){
        redirect('/');
    }

    const usertoken = await fetchUserToken();
    const userdata = await getTopTrack(usertoken.accessToken);

   return <Viewer userData={userdata.items} />
}
