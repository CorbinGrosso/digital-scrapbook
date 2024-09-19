"use server";

import { sql } from '@vercel/postgres';

export async function UploadPostToDatabase(formData: FormData) {
        
        const title = String(formData.get('title'));
        const date = String(formData.get('date'));
        const media = [];
        for (let i=0; formData.get(`media${i}`); i++) {
                if (formData.get(`caption${i}`)) {
                        media.push({'hasCaption': true, 'media': new Blob([String(formData.get(`media${i}`))]), 'caption': String(formData.get(`caption${i}`))});
                } else {
                        media.push({'hasCaption': false, 'media': new Blob([String(formData.get(`media${i}`))])});
                }
        }

        await sql`INSERT INTO Posts (title, date)
                VALUES (${title}, ${date});`;
        const results = await sql.query(`SELECT id FROM Posts 
                                WHERE title=$1 AND date=$2`, [title, date]);
        const postId = results.rows[0].id;
        for (let i=0; i < media.length; i++) {
                if (media[i].hasCaption) {
                        await sql`INSERT INTO Media (media, description, post_id)
                                VALUES (${URL.createObjectURL(media[i].media)}, ${media[i].caption}, ${postId});`;
                } else {
                        await sql`INSERT INTO Media (media, post_id)
                                VALUES (${URL.createObjectURL(media[i].media)}, ${postId});`;
                }
        }
}