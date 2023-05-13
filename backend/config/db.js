const mongoose = require('mongoose')
//const { MongoClient , ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://admin:newpassword@mernstack.9ylqljw.mongodb.net/?retryWrites=true&w=majority";


const connectDB = async() => {
  try{
    const conn = await mongoose.connect(uri)
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch(error){
    console.log(error);
    process.exit(1)
  }
}

// connectDB()
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

module.exports = connectDB;