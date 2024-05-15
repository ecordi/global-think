// import 'dotenv/config' 
// import mongoose from 'mongoose'
// const connectionString = process.env.CONNSTRING

// if (!connectionString) {
//   console.error('Db connection string is not defined in the .env file');
//   process.exit(1);
// }

// const options = {
//   autoIndex: false, 
//   maxPoolSize: 10, 
//   serverSelectionTimeoutMS: 5000, 
//   socketTimeoutMS: 45000, 
//   family: 4

// }

// mongoose.set('strictQuery', true);
// //db connection
// export const db = mongoose.connect(connectionString!, options)
//   .then(res => {

//     if (res) {
//       console.log(`Database connection is succeffully established.`)
//     }
//   }).catch(err => {
//     console.log(err) 
//   })
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { User } from "./../Models/users";

export default async function db() {
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  mongoose.set("strictQuery", false);
  await mongoose.connect(mongoUri, { dbName: "testingDb" });
  console.log(`MongoDB successfully connected to ${mongoUri}`);
}
export async function createSampleUsers() {
  const sampleUsers = [
    {
      nombre: "Eugenio Cordi",
      correo: "eugenio.cordi@global-think.com",
      edad: 25,
    },
    {
      nombre: "Nahuel Gigena",
      correo: "nahuel.gigena@global-think.com",
      edad: 30,
    },
    {
      nombre: "Diego Ghione",
      correo: "diego.ghione@global-think.com",
      edad: 35,
    },
    {
      nombre: "Lucas Martinez",
      correo: "lucas.martinez@global-think.com",
      edad: 20,
    },
    {
      nombre: "Rosario Tiengo",
      correo: "rosario.tiengo@global-think.com",
      edad: 22,
    },
    { nombre: "Ivan Aradas", correo: "ivan.aradas@global-think.com", edad: 18 },
    {
      nombre: " Josue Bacca",
      correo: "josue.bacca@global-think.com",
      edad: 15,
    },
    {
      nombre: "Fernanda Lopez",
      correo: "fernanda.lopez@global-think.com",
      edad: 28,
    },
    {
      nombre: "Sebastian Fernandez",
      correo: "sebastian.fernandez@global-think.com",
      edad: 33,
    },
    { nombre: "Camila Ruiz", correo: "camila.ruiz@global-think.com", edad: 26 },
    {
      nombre: "Mateo Rodriguez",
      correo: "mateo.rodriguez@global-think.com",
      edad: 29,
    },
    {
      nombre: "Valentina Gonzalez",
      correo: "valentina.gonzalez@global-think.com",
      edad: 24,
    },
    {
      nombre: "Martin Sanchez",
      correo: "martin.sanchez@global-think.com",
      edad: 31,
    },
    {
      nombre: "Luciana Herrera",
      correo: "luciana.herrera@global-think.com",
      edad: 27,
    },
  ];

  for (const userData of sampleUsers) {
    const user = new User(userData);
    await user.save();
  }
}

 