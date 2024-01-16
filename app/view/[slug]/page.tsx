import {GraphQLClient} from 'graphql-request';
import ThreedView from './threed_view';
import querygen from '../../../helpers/querygen';
import Layout from './layout'
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
    const data = await client.request<ImageResponseType>(querygen("getImage",slug));
    const imageData = data.queryImagesByIdSlugIndex.items[0];
    console.log(data)

    return (
<Layout description={imageData.description} title={imageData.name} og={imageData.imageUrl}>
    <ThreedView ImageData={imageData}/>
    </Layout>
    )
}