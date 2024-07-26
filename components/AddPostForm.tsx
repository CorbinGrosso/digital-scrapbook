"use client";

import { useState } from 'react';

interface Media {
    file: File | null;
    caption: string;
}

interface PostData {
    title: string;
    date: string;
    media: Array<Media>;
}

export default function AddPostForm() {

    const [postData, setPostData] = useState<PostData>({
        'title': '',
        'date': '',
        'media': [{
            'file': null,
            'caption': ""
        }],
    })
    const [mediaCount, setMediaCount] = useState(0);

    function handleAddMediaButton() {
        setMediaCount(mediaCount + 1);
        let tempMedia = postData.media;
        tempMedia.push({
            'file': null,
            'caption': ""
        });
        setPostData({
            ...postData,
            'media': tempMedia
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        console.log(postData);
        // if the final char in the name is a number, it is meant for the media array
        if (/^\d/.test(name[name.length - 1])) {
            let index = Number(name.replace(/^\D+/g, ''));
            // name == 'file'
            if (name[0] == "f" && files) {
                setPostData(prevData => ({
                    ...postData,
                    'media': prevData['media'].map((media, i) => {
                        if (i == index) {
                            return {
                                ...media,
                                'file': files[0]
                            }
                        } else {
                            return media;
                        }
                    })
                }));
            } else { // name == 'caption'
                setPostData(prevData => ({
                    ...postData,
                    'media': prevData['media'].map((media, i) => {
                        if (i == index) {
                            return {
                                ...media,
                                'caption': value
                            }
                        } else {
                            return media;
                        }
                    })
                }));
            }
        } else {
            setPostData(prevData => ({
                ...postData,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(postData);
        // await sql`INSERT INTO Posts (title, caption, date) 
        //  VALUES (${postData.title}, ${postData.caption}, ${postData.date});`;
        // Handle form submission, e.g., send data to your server
    };

    function AddMedia() {
        let output = [];
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
                            onChange={handleChange}
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
                            value={postData.media[i].caption}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                </div>
            );
        }
        return <>
            {output}
        </>
    }

    return <div style={{ "background": "grey", "color": "black" }}>
        <h1>Create a New Post</h1>

        <form onSubmit={handleSubmit}>
            {/* Get new Post information */}

            <label>
                Title of Post:
                <br />
                <input
                    type="text"
                    name="title"
                    value={postData.title}
                    onChange={handleChange}
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
                    value={postData.date}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />

            <AddMedia />

            <button onClick={handleAddMediaButton} style={{ "borderWidth": "2px", "margin": "2px" }}>Add more media</button>

            <br />

            <button type="submit" style={{ "borderWidth": "2px", "margin": "2px" }}>Post</button>

        </form>
    </div>
}


