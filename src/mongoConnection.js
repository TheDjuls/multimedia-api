
const mongoose = require('mongoose');
const uri = "mongodb+srv://TheDjuls:0TcEpWZCB3XHYWCl@monitor.t7fif9c.mongodb.net/multimedia?retryWrites=true&w=majority";

async function run() {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("Conexión exitosa a MongoDB!");
    } catch (error) {
      console.error("Error al conectar a MongoDB:", error);
    }
  }
  
  run();
