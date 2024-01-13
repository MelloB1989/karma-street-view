import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config();

console.log("jjhjn",process.env.ID);

AWS.config.update({
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.SECRET,
    region: process.env.REGION
});

const s3 = new AWS.S3();

export default function AdminHome() {
    const [image, setImage] = useState({
        name: '',
        description: '',
        slug: '',
        imageUrl: '',
        front: '',
        back: '',
        left: '',
        right: '',
        fleft: '',
        fright: '',
        bleft: '',
        bright: '',
    });

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            const uploadParams = {
                Bucket: process.env.BUCKET_NAME,
                Key: file.name,
                Body: file,
                ACL: 'public-read'
            };
    
            s3.upload(uploadParams, (err, data) => {
                if (err) {
                    console.log("Error uploading file:", err);
                } else {
                    setImage({
                        ...image,
                        imageUrl: data.Location,
                    });
                    console.log(data)
                }
            });
        },
    });

    const handleChange = (e) => {
        setImage({
            ...image,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the image object to your API
        console.log(image);
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                        Image
                    </label>
                    <div {...getRootProps()} className="border-2 border-gray-300 border-dashed rounded-md p-4">
                        <input {...getInputProps()} id="imageUrl" />
                        <div className="flex justify-center">
                            <p className="text-gray-700">Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </div>
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