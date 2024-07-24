// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
//     try {
//         const result =
//             await sql`CREATE TABLE Posts (
//                 id SERIAL PRIMARY KEY,
//                 title VARCHAR(25) NOT NULL,
//                 caption VARCHAR(255) NOT NULL,
//                 date DATE NOT NULL
//              );`;
//         return NextResponse.json({ result }, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ error }, { status: 500 });
//     }
// }