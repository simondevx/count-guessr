import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { sql } from "@vercel/postgres";

async function setupDB() {
  try {
    console.log("Creating tables...");

    await sql`
      CREATE TABLE IF NOT EXISTS global_vars (
        name TEXT PRIMARY KEY,
        value TEXT
      );
    `;

    await sql`INSERT INTO global_vars (name, value) VALUES ('solution', '1234');`

    await sql`
      CREATE TABLE IF NOT EXISTS entries (
        name TEXT PRIMARY KEY,
        count INTEGER
      );
    `;

    console.log("Tables created successfully!");
  } catch (error) {
    console.error("Error setting up database:", error);
  }
}

setupDB();