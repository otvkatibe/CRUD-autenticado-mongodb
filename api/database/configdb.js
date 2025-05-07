import mongoose from "mongoose";

const connect = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: process.env.MONGODB_NAME,
        });
        console.log("Connectado ao MongoDB com sucesso!");
    } 
    catch (error) {
        console.error("Erro conectando:", error);
        process.exit(1);
    }
}

export default { connect };