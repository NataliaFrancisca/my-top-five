'use client';
import Button from "./Button";

const ButtonDownload = () => {
    return <Button message="DOWNLOAD" style="w-8/12 self-end" buttonEvent={() => console.log("DOWNLOAD")}/>
}

export default ButtonDownload;