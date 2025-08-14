// import mongoose, {Schema} from "mongoose";

// const productoSchema = new Schema({
//   nombreProducto: {
//     type: String,
//     required: true,
//     minLength: 2,
//     maxLength:100,
//     unique: true
//   },
//   precio: {
//     type: Number,
//     required: true,
//     min: 50,
//     max: 100000
//   },
//   categoria: {
//     type: String,
//     required: true,
//     enum: ['Infuciones', 'Batidos', 'Dulce', 'Salado']
//   },
//   imagen: {
//     type: String,
//     required: true,
//     validate: {
//       validator: (valor) => {
//         return /^(https?:\/\/.*\.(?:png|jpg|jpeg))$/i.test(valor);
//       },
//     }
//   },
//   descripcion_breve: {
//     type: String,
//     required: true,
//     minLength:5,
//     maxLength: 250
//   }, 
  
//   descripcion_amplia: {
//     type: String,
//     required: true,
//     minLength:10,
//     maxLength: 500
//   }
// })

// const producto = mongoose.model('producto', productoSchema); 

// export default producto;