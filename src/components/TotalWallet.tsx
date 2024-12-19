import { Avatar, Progress } from "@nextui-org/react";

const coins = [
  {
    nome: "Bitcoin",
    simbolo: "BTC",
    preco: 100229.9, // Preço em dólares americanos
    imagem: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    value: 25
  },
  {
    nome: "Ethereum",
    simbolo: "ETH",
    preco: 3621.60,
    imagem: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    value: 20
  },
  {
    nome: "Tether",
    simbolo: "USDT",
    preco: 0.9994,
    imagem: "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png",
    value: 15
  },
  {
    nome: "XRP",
    simbolo: "XRP",
    preco: 2.3218,
    imagem: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
    value: 10
  },
  {
    nome: "Solana",
    simbolo: "SOL",
    preco: 217.64,
    imagem: "https://assets.coingecko.com/coins/images/4128/large/Solana.jpg",
    value: 10
  },
  {
    nome: "Cardano",
    simbolo: "ADA",
    preco: 1.05,
    imagem: "https://assets.coingecko.com/coins/images/975/large/cardano.png",
    value: 20
  }
];

export default function TotalWallet() {
  return (
    <div className="blurred-background w-[300px] px-2 py-4">
      <h1 className="text-white text-xl font-normal">Chain Allocation</h1>
      {coins.map((coin, i) => {
        return (
          <div className="mt-8" key={i}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Avatar alt={coin.nome} className="w-6 h-6 mr-2" src={coin.imagem} />
                <span className="text-white font-bold mr-1">{coin.nome}</span>
                <span className="text-white font-light opacity-30 text-sm">{`(${coin.simbolo})`}</span>
              </div>
              <div>
                <span className="text-white">{`$ ${coin.preco}`}</span>
              </div>
            </div>
            <Progress aria-label="Loading..." color="primary" value={coin.value} />
          </div>
       )
      })}
    </div>
  )
}