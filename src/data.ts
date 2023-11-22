const produtos = [
  {
    number: 1,
    name: "computador1"

  },
  {
    number: 2,
    name: "computador1"
  },
  {
    number: 3,
    name: "computador1"
  },


];
/*

const eletronicos = [
  {
    number: 1,
    name: "eletronicos1"
  },
  {
    number: 2,
    name: "eletronicos1"
  },
  {
    number: 3,
    name: "eletronicos1"
  },


];

const livors = [
  {
    number: 1,
    name: "livros1"
  },
  {
    number: 2,
    name: "livros1"
  },
  {
    number: 3,
    name: "livros1"
  },


];
*/
export function getProducts() {
  return produtos;
}

export function getProduto(number: number) {
  return produtos.find((produto) => produto.number === number
  );
}