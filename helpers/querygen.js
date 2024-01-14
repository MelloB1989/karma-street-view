import { gql } from "@apollo/client"

const querygen = (query, params) => {
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
    if(query === "updateImage")
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
}

module.exports = querygen