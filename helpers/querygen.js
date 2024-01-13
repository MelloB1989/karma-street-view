import { gql } from "@apollo/client"

const querygen = (query, params) => {
    if(query === "addImage")
    return gql`mutation MyMutation {
        createImage(input: {
            back: "${params?.back}", 
            bleft: "${params?.bleft}", 
            bright: "${params?.bright}", 
            fleft: "${params?.fleft}", 
            description: "${params?.description}", 
            fright: "${params?.fright}", 
            front: "${params?.front}", 
            slug: "${params?.slug}", 
            right: "${params?.right}", 
            name: "${params?.name}", 
            left: "${params?.left}", 
            imageUrl: "${params?.imageUrl}"
        }) {
          id
        }
      }`
}

module.exports = querygen