import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userName = searchParams.get('name');
  const emailAdr = searchParams.get('email');
 
  try {
    if (!userName || !emailAdr) throw new Error('Pet and owner names required');
    await sql`INSERT INTO USERS (name, email, joinedat) VALUES (${userName}, ${emailAdr}, NOW());`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const pets = await sql`SELECT * FROM USERS;`;
  return NextResponse.json({ pets }, { status: 200 });
}