import React, { useState } from 'react';
import querygen from "@/helpers/querygen";
import { gql, useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { toast } from 'react-toastify';

export default function AdminHome() {
    const [image, setImage] = useState({
        name: '',
        description: '',
        slug: '',
        imageUrl: '',
    });

    const handleChange = (e) => {
        setImage({
            ...image,
            [e.target.name]: e.target.value,
        });
    };

    const [addImage, { data, error, loading }] = useMutation(gql`mutation MyMutation($input: CreateImageInput!) {
        createImage(input: $input) {
          id
        }
      }`);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(image);
        const response = await addImage({ variables: { input: image } });
        if(response.data) toast.success("Image added successfully");
        if(response.error) toast.error("Error adding image");
    };

    return (
        <div className="flex justify-center mt-6">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" name="description" onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
                        Slug
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="slug" type="text" name="slug" onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
                        Image URL
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="imageUrl" type="text" name="imageUrl" onChange={handleChange} />
                </div>
                {/* Add similar input fields for front, back, left, right, fleft, fright, bleft, bright */}
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}