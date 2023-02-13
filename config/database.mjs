import mongoose from "mongoose";
mongoose.set('strictQuery', false);
const dbConnection = () => {
    mongoose.connect(process.env.DB_URI).then((connect) => {
        console.log(`Database connected: ${connect.connection.host}`); //to know the host if connected succed
    }).catch((err) => {
        console.error(`DAtabase Error ${err}`) // to know by message if there is un error  
        process.exit(1) //to stop the application
    });
    
}

export default dbConnection;