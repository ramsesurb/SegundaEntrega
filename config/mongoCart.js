import mongoose from "mongoose"

const productoSchema = new mongoose.Schema({
    id: {
        type: Number, unique: true
      },
    title: String,
    price: Number,
    thumbnail:String,
    stock: Number,
  })
  
  const connectionStringUrl = ("mongodb+srv://ram:1004@proyectofinal.3lbfntb.mongodb.net/ecommerce")
  ;

  try {
     mongoose.connect(connectionStringUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Base de datos conectada');}
  
  catch (error) {
    console.log('Error al conectar a la base de datos', error)
  }

  
  
  const productoCartModel = mongoose.model('carritos', productoSchema);

  export default productoCartModel