import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Viewer from "../components/Viewer/Viewer";
import ButtonDownload from "../components/Button/ButtonDownload";

export default async function Page(){
    const session = await getServerSession();

    if(!session){
        redirect('/');
    }

    return(
        <main className="py-10 px-6 flex flex-col md:mx-auto md:w-6/12 lg:w-4/12">
            <Viewer />
            <ButtonDownload />
        </main>
    )
}
