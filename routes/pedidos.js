const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando o get dentro de pedidos'
  })
});

router.post('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Usando o post dentro de pedidos'
  })
});

router.get('/:id_pedido', (req, res, next) => {
  const id = req.params.id_pedido
  if(id === 'especial'){
    res.status(200).send({
      mensagem: 'Você descobriu o id especial',
      id: id
    })
  } else {
    res.status(200).send({
      mensagem: 'Você passou um ID',
      id: id
    })
  }

});



router.delete('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Usando o delete dentro de pedidos'
  })
});

module.exports = router;
