import { Database as DB } from "./database.types";

declare global {
   type Database = DB
}