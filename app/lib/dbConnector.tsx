'use server'

import { sql } from '@vercel/postgres';

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
    const result = await sql`SELECT * FROM entries ORDER BY ABS(count - ${result_count}) LIMIT 10;`
    return result.rows.map(row => ({
        name: row.name,
        count: Number(row.count),
        distance: Math.abs(result_count-Number(row.count)),
    }));
}