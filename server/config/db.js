import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '.env'})

const connectDB = async () => {
    try {
        //await mongoose.connect(process.env.DB_URL
            await mongoose.connect(process.env.DB_URL
              
            , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        }
        
        )                          //PROBLEM
        console.log('DB is working')
    } catch (error) {
        console.log(error)
        console.log('there is something wrong')
        process.exit(1) //if there is an error, the app will stopped
    }
}

export default connectDB;