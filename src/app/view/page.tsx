'use client'
import Button from "../components/Button/Button";
import Viewer from "../components/Viewer/Viewer";

const Page = () => {
    return(
        <main className="py-10 px-6 flex flex-col md:w-6/12 md:mx-auto lg:w-4/12">
            <Viewer />
            <Button message="DOWNLOAD" style="w-8/12 self-end" buttonEvent={() => console.log("DOWNLOAD")}/>
        </main>
    )
};

export default Page;