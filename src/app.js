import bcrypt from "bcrypt";
import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
import connection from "./database.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(mainRouter);

export default app;
