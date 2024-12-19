import {Select, SelectItem, Avatar, Input, Button} from "@nextui-org/react";

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

export default function AddForm() {
  return (
    <div className="flex items-center justify-center h-full gap-5 w-full">
      <Select className="w-2/5" label="Select token"
        classNames={{
          mainWrapper: "bg-transparent",
          trigger: [
            "bg-[rgba(28,28,28,0.6)]",
            "data-[hover=true]:bg-[rgba(28,28,28,0.6)]",
          ],
          value: [ 
            "text-white",
            "group-data-[has-value=true]:text-white"
          ],
          selectorIcon: "text-white"
        }}
      >
        {coins.map((coin, i) => {
          return (
            <SelectItem
              className="text-white"
              color="primary"
              key={i}
              startContent={
                <Avatar alt="Argentina" className="w-6 h-6" src={coin.imagem} />
              }
              >{coin.nome}
            </SelectItem>
          )
        })}
      </Select>
      <Input
      classNames={{
        label: "text-white dark:text-white/90",
        input: [
          "text-white",
          "bg-transparent",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          "group-data-[has-value=true]:text-white"
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "bg-[rgba(28,28,28,0.6)]",
          "data-[hover=true]:bg-[rgba(28,28,28,0.6)]",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-[rgba(28,28,28,0.6)]",
          "dark:hover:bg-default/70",
          "group-data-[focus=true]:bg-[rgba(28,28,28,0.6)]",
          "dark:group-data-[focus=true]:bg-default/60",
          "!cursor-text",
        ],
      }}
      className="h-full w-2/5"
      endContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-small">$</span>
        </div>
      }
      label="Price"
      labelPlacement="inside"
      placeholder="0.00"
      type="number"
    />
    <Button color="primary" className="h-14 w-1/5">Add</Button>
  </div>
  );
}
