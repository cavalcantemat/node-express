import mongoose from "mongoose";

mongoose.connect('mongodb+srv://cavalcantemat:fYkzJzSh0JDfw0JH@node-express.bihara7.mongodb.net/library-node');

let db = mongoose.connection;

export default db;