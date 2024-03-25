// import { Client } from '@vercel/postgresql';

// let db: Client | null = null;

// const connectDb = async (): Promise<Client> => {
//   if (!db) {
//     db = new Client({
//       connectionString: process.env.DATABASE_URL,
//       ssl: {
//         rejectUnauthorized: false,
//       },
//     });

//     await db
//     .connect();
// }
// return db;
// };

// export default connectDb;
