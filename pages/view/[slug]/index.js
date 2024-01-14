import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { gql, useQuery } from "@apollo/client";
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

const getImageQ = gql`query MyQuery($slug: String!) {
    queryImagesByIdSlugIndex(slug: $slug) {
    items {
      back
      bleft
      bright
      description
      fleft
      fright
      front
      id
      imageUrl
      left
      name
      right
      slug
    }
  }
  }`;

  export default function Image() {
    const router = useRouter();
    const { slug } = router.query;
    const [image, setImage] = useState();
    const [sceneLoaded, setSceneLoaded] = useState(false);
    console.log(sceneLoaded)

    const { data, error, loading } = useQuery(getImageQ, { variables: { slug: slug } });

    useEffect(() => {
        setTimeout(()=>{
            loadExternalScript('https://aframe.io/releases/1.5.0/aframe.min.js');
            setSceneLoaded(true);
          }, 2000);
        if(data) setImage(data.queryImagesByIdSlugIndex.items[0]);
        if(error) toast.error("Error fetching image");
    }, [data, error]);

    return(
        <>
        <div className="h-screen flex flex-col">
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
            <div className="control-panel grid grid-cols-3 gap-2 p-2">
                <button className="col-start-2 justify-self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full" onClick={console.log("sad")}>
                    &#8598; {/* Left-Up arrow */}
                </button>
                <button className="col-start-2 justify-self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full" onClick={console.log("sad")}>
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
                <button className="col-start-2 justify-self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full" onClick={console.log("sad")}>
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