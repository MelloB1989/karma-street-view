import axios from 'axios';
import { parse } from 'graphql';
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {

    // Parse the GraphQL query
    const query = req.body.query ? parse(req.body.query) : null;
    const variables = req.body.variables;
    const operation = query.definitions[0];

    if (!isUserAuthorizedForOperation(operation, variables)) {
    res.status(403).json({ error: "Not authorized for this operation" });
    return;
}
else{
    try {
    // Forward the request to the GraphQL endpoint
        const response = await axios.post(process.env.GQL_ENDPOINT, req.body, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.GQL_API_KEY,
            },
        });
    
        res.status(200).json(response.data);
    } catch (error) {
        console.error('API route error:', error);
        res.status(error.response?.status || 500).json({ message: error.message });
    }
}
}

function isUserAuthorizedForOperation(operation, variables) {
    if (operation.operation === 'query' || operation.operation === 'mutation') {
        return true;
    }
    else return false;
}