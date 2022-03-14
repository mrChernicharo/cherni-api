import express from "express";
import { rootRoutes } from "./routes/root.routes";
import { userRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use(rootRoutes);
app.use("/users", userRoutes);

export { app };
