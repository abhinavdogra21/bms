import { config } from "dotenv";
import path from "path";
config({ path: path.resolve(process.cwd(), "../../packages/prisma/.env") });
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

export const client = new PrismaClient({ adapter });