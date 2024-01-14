import React, { useEffect, useState } from 'react';
import querygen from "@/helpers/querygen";
import { gql, useMutation } from "@apollo/client";
import { useLazyQuery } from "@apollo/client";
import { toast } from 'react-toastify';

const getImageQ = gql`query MyQuery($slug: String!) {
    queryImagesByIdSlugIndex(slug: $slug) {
    items {
      id
    }
  }
  }`;

export default function AdminHome() {
    const [image, setImage] = useState({
        front: '',
        back: '',
        left: '',
        right: '',
        fleft: '',
        fright: '',
        bleft: '',
        bright: '',
        id: ''
    });

    const [slug, setSlug] = useState('');

    const handleChange = (e) => {
        setImage({
            ...image,
            [e.target.name]: e.target.value,
        });
    };

    const [updateImage, { data, error, loading }] = useMutation(gql`mutation MyMutation($input: UpdateImageInput!) {
        updateImage(input: $input) {
          id
        }
      }`);
    
    const [getImageId, { data: imageData, error: imageError, loading: imageLoading }] = useLazyQuery(getImageQ);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await getImageId({ variables: { slug: slug } });
        const id = await response.data.queryImagesByIdSlugIndex.items[0].id
        setImage({
            ...image,
            id: id
        });
        console.log(image);
        const updateResponse = await updateImage({ variables: { input: image } });
        if(updateResponse.data) toast.success("Image updated successfully");
        if(updateResponse.error) toast.error("Error updating image");
    };

    return (
        <div className="flex justify-center mt-6">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Slug
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" onChange={(e) => setSlug(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Front
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="front" type="text" name="front" onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
                        Back
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="back" type="text" name="back" onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
                        Left
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="left" type="text" name="left" onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
                        Right
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="right" type="text" name="right" onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
                       Front Left
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fleft" type="text" name="fright" onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
                        Front Right
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fright" type="text" name="fright" onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
                       Back Left
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bleft" type="text" name="bleft" onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
                        Back Right
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bright" type="text" name="bright" onChange={handleChange} />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}