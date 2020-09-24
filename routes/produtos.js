const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando o get dentro de produtos'
  })
});

router.post('/', (req, res, next) => {
  const produto = {
    nome: req.body.nome,
    preco: req.body.preco,
  }

  res.status(201).send({
    mensagem: 'Usando o post dentro de produtos',
    produtoCriado: produto
  })
});

router.get('/:id_produto', (req, res, next) => {
  const id = req.params.id_produto
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

router.patch('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Usando o patch dentro de produtos'
  })
});

router.delete('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Usando o delete dentro de produtos'
  })
});

module.exports = router;
