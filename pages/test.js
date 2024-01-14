import { useEffect } from 'react';

function loadExternalScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
}
const image = {
    name: 'Karma Street',
    imageUrl: 'https://cdn.global.noobsverse.com/karma-street/IMG_20240112_141536_00_157.jpg',
}
export default function Test(){
    useEffect(() => {
        setTimeout(()=>{
            loadExternalScript('https://aframe.io/releases/1.5.0/aframe.min.js');
          }, 2000);
    }, []);
    return(
        <>
        <a-scene>
            <a-sky src={image?.imageUrl} rotation="0 -130 0" />
            <a-text
                font="kelsonsans"
                value={image?.name}
                width={6}
                position="-2.5 0.25 -1.5"
                rotation="0 15 0"
            />
        </a-scene>
        </>
    )
}