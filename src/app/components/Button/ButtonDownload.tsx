'use client';
import { RefObject } from "react";
import Button from "./Button";
import { htmlToImageConvert } from "@/utils/generateImage";

const ButtonDownload = (props: {refHtmlToImage: RefObject<HTMLElement>}) => {
    return <Button message="DOWNLOAD" style="w-8/12 self-end" buttonEvent={() => htmlToImageConvert(props.refHtmlToImage.current)}/>
}

export default ButtonDownload;