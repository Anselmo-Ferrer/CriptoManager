import axios from "axios";

// Define a interface para o preço
export interface CryptoValue {
  symbol: string;
  price: string;
}

// Função para buscar o preço atual de um símbolo
export const fetchCryptoPrice = async (symbol: string): Promise<CryptoValue> => {
  const url = "https://api.binance.com/api/v3/ticker/price";
  const response = await axios.get(url, { params: { symbol } });
  return response.data;
};