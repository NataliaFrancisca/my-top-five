import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Viewer from "../components/Viewer/Viewer";

export default async function Page(){
    const session = await getServerSession();

    if(!session){
        redirect('/');
    }

   return <Viewer />
}
