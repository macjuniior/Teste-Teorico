const Order = require('../models/Order');

// Lógica para CRIAR um pedido (POST)
exports.createOrder = async (req, res) => {
  try {
    // 1. Captura os dados que chegam do JSON (em português)
    const { numeroPedido, valorTotal, dataCriacao, items } = req.body;

    // 2. Mapeamento: Transforma os nomes dos campos para o formato do Banco (inglês)
    const novoPedido = new Order({
      orderId: numeroPedido,
      value: valorTotal,
      creationDate: dataCriacao,
      // Faz um loop nos itens para renomear cada campo interno
      items: items.map(item => ({
        productId: item.idItem,
        quantity: item.quantidadeItem,
        price: item.valorItem
      }))
    });

    // 3. Salva no banco de dados
    await novoPedido.save();

    // 4. Retorna sucesso (Status 201 = Created)
    res.status(201).json(novoPedido);
  } catch (err) {
    // Retorna erro caso algo falhe (ex: falta de dados)
    res.status(400).json({ message: "Erro ao criar pedido", error: err.message });
  }
};

// Lógica para BUSCAR um pedido por ID (GET)
exports.getOrderById = async (req, res) => {
  try {
    // Busca no banco um pedido onde o 'orderId' seja igual ao parâmetro da URL
    const pedido = await Order.findOne({ orderId: req.params.orderId });

    if (!pedido) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    res.json(pedido);
  } catch (err) {
    res.status(500).json({ message: "Erro na busca" });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    // Busca pelo orderId e atualiza com os dados que vierem no body
    const pedidoAtualizado = await Order.findOneAndUpdate(
      { orderId: req.params.orderId },
      req.body, 
      { new: true } // Retorna o pedido já com as mudanças
    );
    if (!pedidoAtualizado) return res.status(404).json({ message: "Pedido não encontrado" });
    res.json(pedidoAtualizado);
  } catch (err) {
    res.status(500).json({ message: "Erro ao atualizar" });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const pedido = await Order.findOneAndDelete({ orderId: req.params.orderId });
    if (!pedido) return res.status(404).json({ message: "Pedido não encontrado" });
    res.json({ message: "Pedido removido com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao deletar" });
  }
};