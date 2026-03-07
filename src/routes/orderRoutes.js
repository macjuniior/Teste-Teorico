const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// ROTA PARA CRIAR (POST)
// URL: http://localhost:3000/order
router.post('/', orderController.createOrder);

// ROTA PARA LISTAR TODOS (GET) - Opcional
// URL: http://localhost:3000/order/list
router.get('/list', orderController.listAllOrders);

// ROTA PARA BUSCAR UM POR ID (GET)
// URL: http://localhost:3000/order/v10089016vdb
router.get('/:orderId', orderController.getOrderById);

// ROTA PARA ATUALIZAR (PUT) - Opcional
// URL: http://localhost:3000/order/v10089016vdb
router.put('/:orderId', orderController.updateOrder);

// ROTA PARA DELETAR (DELETE) - Opcional
// URL: http://localhost:3000/order/v10089016vdb
router.delete('/:orderId', orderController.deleteOrder);

module.exports = router;