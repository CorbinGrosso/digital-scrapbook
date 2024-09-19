"use client";

import { useState } from 'react';
import { UploadPostToDatabase } from '@/app/SqlLib'

export default function AddPostForm() {
    const [mediaCount, setMediaCount] = useState(0);

    function handleAddMediaButton() {
        setMediaCount(mediaCount + 1);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formElem = document.getElementById("newPostForm") as HTMLFormElement | null;
        if (typeof formElem === 'undefined' || formElem === null) {
            throw Error("Couldn't find form.")
        }
        const data = new FormData(formElem);
        console.log("Submitted")
        UploadPostToDatabase(data);
    };

    const output = [];
    for (let i = 0; i <= mediaCount; i++) {
        output.push(
            <div key={i}>
                <label>
                    Image:
                    <br />
                    <input
                        type="file"
                        name={`file${i}`}
                        accept="image/*"
                        required
                    />
                </label>
                <br />

                <label>
                    Caption:
                    <br />
                    <input
                        type="text"
                        name={`caption${i}`}
                        required
                    />
                </label>
                <br />
            </div>
        );
    }

    return <div>
        <form id="newPostForm" onSubmit={handleSubmit} action={String(UploadPostToDatabase)}>
            {/* Get new Post information */}

            <label>
                Title of Post:
                <br />
                <input
                    type="text"
                    name="title"
                    required
                />
            </label>
            <br />

            <label>
                Date of Post:
                <br />
                <input
                    type="date"
                    name="date"
                    required
                />
            </label>
            <br />

            {output}

            <button onClick={handleAddMediaButton}>Add more media</button>

            <br />

            <button type="submit">Post</button>

        </form>
    </div>
}


