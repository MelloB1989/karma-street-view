import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { gql, useQuery } from "@apollo/client";
import { toast } from 'react-toastify';

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

    const { data, error, loading } = useQuery(getImageQ, { variables: { slug: slug } });

    useEffect(() => {
        setTimeout(()=>{
            loadExternalScript('https://aframe.io/releases/1.5.0/aframe.min.js');
          }, 2000);
        if(data) setImage(data.queryImagesByIdSlugIndex.items[0]);
        if(error) toast.error("Error fetching image");
    }, [data, error]);

    return(
        <>
        <a-scene>
            <a-sky src={image?.imageUrl} rotation="0 -130 0" />
            <a-text
                font="kelsonsans"
                value={image?.description}
                width={6}
                position="-2.5 0.25 -1.5"
                rotation="0 15 0"
            />
            <a-image
                src="https://img.icons8.com/3d-fluency/94/up.png"
                position="2 0 -2.5"
                rotation="280 -37 0"
                width="1"
                height="1"
            />
        </a-scene>
        </>
    )
}