import React, { useEffect, useState } from "react";
import { fetchCryptoPrice, CryptoValue } from "../services/binanceApi";

type CryptoProps = {
  name: string;
}

export default function CryptoPrice({name}: CryptoProps) {
  const [priceData, setPriceData] = useState<CryptoValue | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchCryptoPrice(name); 
        setPriceData(data);
      } catch (err) {
        setError("Erro ao buscar os dados.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Preço Atual</h1>
      <h2>
        {priceData?.symbol}: ${Number(priceData?.price).toFixed(2)}
      </h2>
    </div>
  );
};
