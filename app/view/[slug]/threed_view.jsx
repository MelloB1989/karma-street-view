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
            {sceneLoaded && (
            <div className="control-panel grid grid-cols-3 gap-2 p-2 absolute bottom-0 left-0 right-0 m-auto w-64">
                <button className="col-start-2 justify-self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full" onClick={() => router.push(`/view/${image.fleft}`)}>
                    &#8598; {/* Left-Up arrow */}
                </button>
                <button className="col-start-2 justify-self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full" onClick={() => router.push(`/view/${image.front}`)}>
                    &#9650; {/* Up arrow */}
                </button>
                <button className="col-start-3 justify-self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full" onClick={console.log("sad")}>
                    &#8599; {/* Right-Up arrow */}
                </button>
                <button className="justify-self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full" onClick={console.log("sad")}>
                    &#9664; {/* Left arrow */}
                </button>
                <button className="col-start-3 justify-self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full" onClick={console.log("sad")}>
                    &#9654; {/* Right arrow */}
                </button>
                <button className="col-start-2 justify-self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full" onClick={console.log("sad")}>
                    &#8601; {/* Left-Down arrow */}
                </button>
                <button className="col-start-2 justify-self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full" onClick={() => router.push(`/view/${image.back}`)}>
                    &#9660; {/* Down arrow */}
                </button>
                <button className="col-start-3 justify-self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full" onClick={console.log("sad")}>
                    &#8600; {/* Right-Down arrow */}
                </button>
            </div>
            )}
        </div>
        </>
    )
}