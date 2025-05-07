import mongoose from "mongoose";

const connect = async () => {
    try {
      mongoose.set("strictQuery", false);
      console.log('Tentando conectar ao MongoDB...');
      await mongoose.connect(process.env.MONGODB_URL, {
        dbName: process.env.MONGODB_NAME,
      });
      console.log('Conectado ao MongoDB com sucesso!');
    } catch (error) {
      console.log('Erro ao conectar ao MongoDB:', error.message);
      process.exit(1);
    }
  };
  
  export default { connect };