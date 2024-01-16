import { gql } from "@apollo/client"

export default function querygen(query: string, params: any){
  if (!params || !query) {
    throw new Error('params or query is undefined');
}
    if(query === "addImage")
    return gql`mutation MyMutation {
        createImage(input: {
            description: "${params?.description}", 
            slug: "${params?.slug}",  
            name: "${params?.name}", 
            imageUrl: "${params?.imageURL}"
        }) {
          id
        }
      }`
    else if(query === "updateImage")
      return gql`mutation MyMutation {
        updateImage(input: {
        back: "${params?.back}", 
        bleft: "${params?.bleft}", 
        bright: "${params?.bright}", 
        fleft: "${params?.fleft}",  
        fright: "${params?.fright}", 
        front: "${params?.front}",
        right: "${params?.right}", 
        left: "${params?.left}",
        id: "${params?.id}"
      }) {
          id
        }
      }`
    else if(query === "getImage")
      return gql`query MyQuery {
        queryImagesByIdSlugIndex(slug: \"${params?.slug}\") {
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
      }`
}