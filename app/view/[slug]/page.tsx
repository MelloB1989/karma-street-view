import {GraphQLClient} from 'graphql-request';
import ThreedView from './threed_view';
import querygen from '../../../helpers/querygen';
import Head from 'next/head';
import dotenv from 'dotenv';
dotenv.config();

const GQL_ENDPOINT = process.env.GQL_ENDPOINT;
const GQL_API_KEY = process.env.GQL_API_KEY;

if (!GQL_ENDPOINT || !GQL_API_KEY) {
    throw new Error('Environment variables GQL_ENDPOINT and GQL_API_KEY must be defined');
  }

interface Item {
    back: string;
    bleft: string;
    bright: string;
    description: string;
    fleft: string;
    fright: string;
    front: string;
    id: string;
    imageUrl: string;
    left: string;
    name: string;
    right: string;
    slug: string;
  }
  
  interface ImageResponseType {
    queryImagesByIdSlugIndex: {
      items: Item[];
    };
  }

  const client = new GraphQLClient(GQL_ENDPOINT, {
    headers: {
      "x-api-key": GQL_API_KEY,
    },
});

export default async function Page({params}: { params: { slug: string } }){
    const {slug} = params;
    const r = querygen("getImage", {slug});
    const data = await client.request<ImageResponseType>(r || '');
    const imageData = data.queryImagesByIdSlugIndex.items[0];
    console.log(data)

    return (
<>
<Head>
        <link rel="icon" href="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/karma-street-view-removebg-preview.png" />
        <title>{imageData.name ? `${imageData.name} | Karma Street View` : 'Karma Street View'}</title>
        <meta
              property="og:image"
              content={
                imageData.imageUrl ? imageData.imageUrl : "https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/karma-street-view-removebg-preview.png"
              }
            />
        <meta name="description" content={imageData.description ? imageData.description : 'Our platform provides a unique 360° view of businesses, allowing you to virtually step inside and experience what they have to offer.'} />
      </Head>
    <ThreedView ImageData={imageData}/>
    </>
    )
}