import pg from "pg";
import dotenv from 'dotenv';
dotenv.config();

const {Pool} = pg;

const connectionDB = new Pool({
    connectionString:`postgresql://postgres:5290@localhost:5432/eletrowish?schema=public`
 
})

export default connectionDB