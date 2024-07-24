"use client";

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { useState } from 'react';

export default function AddPostForm() {

    const [postData, setPostData] = useState({
        'title': '',
        'date': '',
        'caption': '',
        'files': null,
    })

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setPostData({
            ...postData,
            [name]: files ? files : value
        });
    };

    const handleSubmit = async (e) => {
        console.log(postData);
        // await sql`INSERT INTO Posts (title, caption, date) VALUES (${postData.title}, ${postData.caption}, ${postData.date});`;
        // Handle form submission, e.g., send data to your server
    };

    return <>
        <h1>Create a New Post</h1>

        <form onSubmit={handleSubmit}>
            {/* Get new Post information */}

            <label>Title of Milestone:</label>
            <input
                type="text"
                name="milestone"
                value={postData.title}
                onChange={handleChange}
                required
            />

            <label>Date of Milestone:</label>
            <input
                type="date"
                name="date"
                value={postData.date}
                onChange={handleChange}
                required
            />

            <label>Caption:</label>
            <input
                type="text"
                name="Milestone"
                value={postData.title}
                onChange={handleChange}
                required
            />

            <label>Images:</label>
            <input
                type="file"
                name="files"
                accept="image/*"
                onChange={handleChange}
                required
                multiple
            />

            <button type="submit">Post</button>

        </form>
    </>
}

// export async function GET(request: Request) {
//     const { searchParams } = new URL(request.url);
//     const petName = searchParams.get('petName');
//     const ownerName = searchParams.get('ownerName');

//     try {
//         if (!petName || !ownerName) throw new Error('Pet and owner names required');
//         await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
//     } catch (error) {
//         return NextResponse.json({ error }, { status: 500 });
//     }

//     const pets = await sql`SELECT * FROM Pets;`;
//     return NextResponse.json({ pets }, { status: 200 });
// }
