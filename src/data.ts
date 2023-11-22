const produtos = [
  {
    number: 1,
    name: "computador1"

  },
  {
    number: 2,
    name: "computador2"
  },
  {
    number: 3,
    name: "computador3"
  },


];


const eltr = [
  {
    number: 1,
    name: "eletronicos1"
  },
  {
    number: 2,
    name: "eletronicos2"
  },
  {
    number: 3,
    name: "eletronicos3"
  },


];

const livros = [
  {
    number: 1,
    name: "livros1"
  },
  {
    number: 2,
    name: "livros2"
  },
  {
    number: 3,
    name: "livros3"
  },


];

export function getProducts() {
  return produtos;
}
export function getEletro() {
  return eltr;
}
export function getLivros() {
  return livros;
}

