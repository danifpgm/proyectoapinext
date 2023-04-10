import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>24h %</th>
            <th>Cap. de mercado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((crypto, index) => (
            <tr key={index}>
              <td>{crypto.name}</td>
              <td>{crypto.current_price}$</td>
              <td style={{ color: crypto.price_change_percentage_24h > 0 ? "green" : "red" }}>
                {crypto.price_change_percentage_24h}%
              </td>
              <td>{crypto.market_cap}$</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        h1 {
          margin-top: 50px;
          text-align: center;
        }
        .crypto-table {
          margin-top: 50px;
          border-collapse: collapse;
          width: 100%;
        }
        .crypto-table th,
        .crypto-table td {
          border: 1px solid black;
          padding: 8px;
          text-align: center;
          font-weight: bold;
          color: white;
        }
        .crypto-table th {
          background-color: green;
        }
        .crypto-table td {
          background-color: black;
        }
      `}</style>
    </div>
  );
}

export default Home;
