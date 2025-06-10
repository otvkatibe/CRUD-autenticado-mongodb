import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import db from "./database/configdb.js";
import userRoute from "./routes/user.route.js";
import workoutRoute from "./routes/workout.route.js";

dotenv.config();   
db.connect();

const app = express();
app.use(express.json());

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use("/", userRoute);
app.use("/workouts", workoutRoute);

app.get("/", (_req, res) => {
    res.send("Backend está no ar!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;