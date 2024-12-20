import { Select, SelectItem, Avatar, Input, Button } from "@nextui-org/react";
import React, { useState } from "react";

const coins = [
  {
    nome: "Bitcoin",
    simbolo: "BTC",
    preco: 100229.9,
    imagem: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    value: 25,
  },
  {
    nome: "Ethereum",
    simbolo: "ETH",
    preco: 3621.6,
    imagem: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    value: 20,
  },
  {
    nome: "Tether",
    simbolo: "USDT",
    preco: 0.9994,
    imagem: "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png",
    value: 15,
  },
  // Outras moedas...
];

// Tipo para um único token
interface Token {
  token: string;
  price: number;
}

// Props do componente
interface AddFormProps {
  tokens: Token[];
  setTokens: React.Dispatch<React.SetStateAction<Token[]>>;
}

export default function AddForm({ tokens, setTokens }: AddFormProps) {
  const [selectedToken, setSelectedToken] = useState<string | null>(null);
  const [price, setPrice] = useState<string>("");

  const handleAddToken = () => {
    if (selectedToken && price) {

      const newToken = { token: selectedToken, price: parseFloat(price) };

      setTokens([...tokens, newToken]); // Atualiza o estado com um novo array
      setSelectedToken(null);
      setPrice("");
    } else {
      alert("Selecione um token e insira um preço válido.");
    }
  };

  return (
    <div className="flex items-center justify-center h-full gap-5 w-full">
      <Select
        className="w-2/5"
        label="Select token"
        onChange={(e) => setSelectedToken(e.target.value)}
        classNames={{
          mainWrapper: "bg-transparent",
          trigger: [
            "bg-[rgba(28,28,28,0.6)]",
            "data-[hover=true]:bg-[rgba(28,28,28,0.6)]",
          ],
          value: ["text-white", "group-data-[has-value=true]:text-white"],
          selectorIcon: "text-white",
        }}
      >
        {coins.map((coin) => (
          <SelectItem
            key={coin.nome}
            value={coin.nome}
            className="text-white"
            startContent={
              <Avatar alt={coin.nome} className="w-6 h-6" src={coin.imagem} />
            }
          >
            {coin.nome}
          </SelectItem>
        ))}
      </Select>

      <Input
        className="h-full w-2/5"
        classNames={{
          label: "text-white dark:text-white/90",
          input: [
            "text-white",
            "bg-transparent",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            "group-data-[has-value=true]:text-white",
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
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">$</span>
          </div>
        }
        label="Price"
        labelPlacement="inside"
        placeholder="0.00"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <Button
        color="primary"
        className="h-14 w-1/5"
        onPress={handleAddToken}
      >
        Add
      </Button>
    </div>
  );
}