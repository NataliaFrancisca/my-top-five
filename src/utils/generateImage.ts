import { toPng } from 'html-to-image';

export const htmlToImageConvert = async(elementRef: HTMLElement | null) => {
    if(elementRef){
        toPng(elementRef, { cacheBust: false })
        .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "my-top-five.png";
            link.href = dataUrl;
            link.click();
        })
        .catch((err) => {
            console.log(err);
        });
    }
};
