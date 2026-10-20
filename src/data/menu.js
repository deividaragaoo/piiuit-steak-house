export function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export const steaks = [
  { name: 'Prime Rib' },
  { name: 'Baby Beef' },
  { name: 'Maminha' },
  { name: 'T-Bone' },
  { name: 'Picanha Uruguaia' },
  { name: 'Picanha Argentina' },
  { name: 'Picanha Australiana' },
  { name: 'Picanha Nacional' },
  { name: 'Bife Ancho' },
  { name: 'Bife de Chorizo' },
  { name: 'Capa de Filé' },
  { name: 'Carne do Sol' },
  { name: 'Assado de Tiras' },
  { name: 'Cowboy' },
]

export const defumados = [
  { name: 'Costela Suína' },
  { name: 'Costela Bovina' },
  { name: 'Cupim' },
  { name: 'Brisket' },
]

export const espetinhos = [
  { name: 'Codorna', price: 14 },
  { name: 'Cupim', price: 12 },
  { name: 'Alcatra', price: 12 },
  { name: 'Lombinho Suíno', price: 12 },
  { name: 'Lombinho de Frango', price: 12 },
  { name: 'Carne do Sol', price: 12 },
  { name: 'Carne do Sol com Queijo Coalho', price: 12 },
  { name: 'Queijo Coalho', price: 12 },
  { name: 'Coração de Frango', price: 10 },
  { name: 'Charque', price: 12 },
  { name: 'Tulipa — Meio da Asa', price: 12 },
  { name: 'Pão de Alho', price: 8 },
]

export const petiscos = [
  { name: 'Batata Frita', price: 18 },
  { name: 'Aipim Frito', price: 12 },
  { name: 'Bolinho de Queijo', price: 25 },
  { name: 'Bolinho de Carne Seca', price: 25 },
  { name: 'Bolinho de Bacalhau', price: 25 },
  { name: 'Bolinho de Camarão', price: 28 },
]

export const bebidas = [
  {
    id: 'cervejas',
    title: 'Cervejas',
    items: [
      { name: 'Cerveja Litrinho', price: 5.5 },
      { name: 'Cerveja sem Álcool', price: 12 },
      { name: 'Heineken Long Neck', price: 10 },
      { name: 'Stella Long Neck', price: 10 },
      { name: 'Budweiser Long Neck', price: 10 },
      { name: 'Heineken 600 ml', price: 18 },
      { name: 'Amstel 600 ml', price: 13 },
    ],
  },
  {
    id: 'sem-alcool',
    title: 'Sem álcool',
    items: [
      { name: 'H2O', price: 8 },
      { name: 'Água Mineral', price: 3 },
      { name: 'Água de Coco', price: 8 },
      { name: 'Água com Gás', price: 4 },
      { name: 'Energético', price: 12 },
      { name: 'Refrigerante — Litro', price: 10 },
      { name: 'Refrigerante — Lata', price: 6 },
      { name: 'Suco na Jarra — 500 ml', price: 12 },
      { name: 'Suco na Jarra — 700 ml', price: 18 },
    ],
  },
  {
    id: 'doses',
    title: 'Doses',
    items: [
      { name: 'Campari — Dose', price: 10 },
      { name: 'Campari Gourmet', price: 12 },
      { name: 'Old Parr', price: 16 },
      { name: "Buchanan's", price: 22 },
      { name: 'Black Label', price: 22 },
      { name: 'Licor 43', price: 20 },
      { name: 'Seleta', price: 7 },
    ],
  },
  {
    id: 'caipirinhas',
    title: 'Caipirinhas',
    items: [{ name: 'Caipirinha', price: 10 }],
  },
  {
    id: 'vinhos',
    title: 'Vinhos — taça',
    items: [
      { name: 'Quinta do Morgado', price: 10 },
      { name: 'DV Catena', price: 45 },
    ],
  },
]

export const categories = [
  {
    id: 'steaks',
    label: 'Steaks',
    note: 'Valores sob consulta.',
    items: steaks,
    columns: true,
  },
  {
    id: 'defumados',
    label: 'Defumados',
    note: 'Valores sob consulta.',
    items: defumados,
  },
  {
    id: 'espetinhos',
    label: 'Espetinhos',
    items: espetinhos,
    columns: true,
  },
  {
    id: 'petiscos',
    label: 'Petiscos',
    items: petiscos,
    columns: true,
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    groups: bebidas,
  },
]
