'use server'

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export const addEntry = async (name: string, count: string) => {
    try {
        await sql`INSERT INTO entries (name, count) VALUES (${name}, ${count})`
    } catch {
        return false
    }
    return true
    
}

const result_count: number = 1000
type Entry = {
    name: string,
    count: number,
    distance: number,
}

export const getTopCounts = async (): Promise<Entry[]> => {
    noStore();
    const solution = await getSolution();
    const result = await sql`SELECT * FROM entries ORDER BY ABS(count - ${solution}) LIMIT 10;`
    return result.rows.map(row => ({
        name: row.name,
        count: Number(row.count),
        distance: Math.abs(result_count-Number(row.count)),
    }));
}

export const getSolution = async (): Promise<number> => {
    noStore();
    const result = await sql`SELECT value FROM global_vars WHERE name = 'solution';`;
    return Number(result.rows[0].value);
};

export const setSolution = async (solution: number) => {
    await sql`UPDATE global_vars SET value = ${solution} WHERE name = 'solution';`
}