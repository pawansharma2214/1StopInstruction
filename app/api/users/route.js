import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    console.error("Database Error:", error);
    return new Response(JSON.stringify({ error: "Database connection failed" }), { status: 500 });
  }
}