const mongoose = require('mongoose');

// Define a estrutura do pedido (Schema)
const OrderSchema = new mongoose.Schema({
  // Identificador único do pedido vindo da requisição
  orderId: { type: String, required: true },
  
  // Valor total do pedido
  value: { type: Number, required: true },
  
  // Data em que o pedido foi gerado
  creationDate: { type: Date, required: true },
  
  // Lista de produtos (Array de objetos)
  items: [{
    productId: Number,
    quantity: Number,
    price: Number
  }]
});

// Exporta o modelo para ser usado nos Controllers
module.exports = mongoose.model('Order', OrderSchema);