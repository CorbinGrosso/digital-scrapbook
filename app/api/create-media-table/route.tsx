import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const result =
            await sql`CREATE TABLE Media (
                id SERIAL PRIMARY KEY,
                description VARCHAR(255),
                media BYTEA NOT NULL,
                post_id INT NOT NULL,
                FOREIGN KEY (post_id) REFERENCES Posts(id)
            );`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}