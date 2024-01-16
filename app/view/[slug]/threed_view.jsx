"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import dynamic from 'next/dynamic';

const Aframe = dynamic(
  () => {
    import('aframe');
    return import('aframe-extras');
  },
  { ssr: false }
);

function loadExternalScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
}

  export default function ThreedView({ImageData}) {
    const router = useRouter();
    const [image, setImage] = useState();
    const [sceneLoaded, setSceneLoaded] = useState(false);

    useEffect(() => {
        setTimeout(()=>{
            loadExternalScript('https://aframe.io/releases/1.5.0/aframe.min.js');
            setSceneLoaded(true);
          }, 2000);
          setImage(ImageData)
    }, []);

    return(
        <>
        <div className="h-screen flex flex-col relative">
            <div className="flex-grow">
                <a-scene embedded onLoad={() => setSceneLoaded(true)}>
                    <a-entity camera look-controls wasd-controls position="0 1.6 0"></a-entity>
                    <a-sky src={image?.imageUrl} rotation="0 -130 0" />
                    <a-text
                        font="kelsonsans"
                        value={image?.description}
                        width={6}
                        position="-2.5 0.25 -1.5"
                        rotation="0 15 0"
                    />
                </a-scene>
            </div>
            <div className="absolute top-0 right-0">
                <img src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/karma-street-view-removebg-preview.png" style={{opacity: 0.8, userSelect: 'none'}} alt="logo" width="100"/>
            </div>
            {!sceneLoaded && (
                 <div className="fixed inset-0 flex items-center justify-center bg-gray-500 z-[50]">
                 <img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="Loading..." />
             </div>)}
            {sceneLoaded && (
<div className="control-panel grid grid-cols-3 gap-2 p-2 absolute bottom-0 left-0 right-0 m-auto w-64">
    {image.fleft && (
        <button className="col-start-2 justify-self-center" onClick={() => router.push(`/view/${image.fleft}`)}>
            <img src="https://cdn.global.noobsverse.com/arrows/fleft.png" style={{userSelect: 'none'}} width="300" alt="Left-Up arrow" />
        </button>
    )}
    {image.front && (
        <button className="col-start-2 justify-self-center" onClick={() => router.push(`/view/${image.front}`)}>
            <img src="https://cdn.global.noobsverse.com/arrows/front.png" style={{userSelect: 'none'}} width="300" alt="Up arrow" />
        </button>
    )}
    {image.fright && (
        <button className="col-start-3 justify-self-center" onClick={() => router.push(`/view/${image.fright}`)}>
            <img src="https://cdn.global.noobsverse.com/arrows/fright.png" style={{userSelect: 'none'}} width="300" alt="Right-Up arrow" />
        </button>
    )}
    {image.left && (
        <button className="justify-self-center" onClick={() => router.push(`/view/${image.left}`)}>
            <img src="https://cdn.global.noobsverse.com/arrows/left.png" style={{userSelect: 'none'}} width="300" alt="Left arrow" />
        </button>
    )}
    {image.right && (
        <button className="col-start-3 justify-self-center" onClick={() => router.push(`/view/${image.right}`)}>
            <img src="https://cdn.global.noobsverse.com/arrows/right.png" style={{userSelect: 'none'}} width="300" alt="Right arrow" />
        </button>
    )}
    {image.bleft && (
        <button className="col-start-2 justify-self-center" onClick={() => router.push(`/view/${image.bleft}`)}>
            <img src="https://cdn.global.noobsverse.com/arrows/bleft.png" style={{userSelect: 'none'}} width="300" alt="Left-Down arrow" />
        </button>
    )}
    {image.back && (
        <button className="col-start-2 justify-self-center" onClick={() => router.push(`/view/${image.back}`)}>
            <img src="https://cdn.global.noobsverse.com/arrows/back.png" style={{userSelect: 'none'}} width="300" alt="Down arrow" />
        </button>
    )}
    {image.bright && (
        <button className="col-start-3 justify-self-center" onClick={() => router.push(`/view/${image.bright}`)}>
            <img src="https://cdn.global.noobsverse.com/arrows/bright.png" style={{userSelect: 'none'}} width="300" alt="Right-Down arrow" />
        </button>
    )}
</div>
)}
        </div>
        </>
    )
}