'use server'

import { sql } from '@vercel/postgres';

export const addEntry = async (name: string, count: string) => {
    await sql`INSERT INTO entries (name, count) VALUES (${name}, ${count})`
}