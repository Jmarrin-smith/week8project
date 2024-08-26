import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

export const db = new pg.Pool({ connectionString: process.env.DB });

// const result = await db.query(`SELECT * FROM posts`);
function dosomething() {
  console.log(db);
}

dosomething();
