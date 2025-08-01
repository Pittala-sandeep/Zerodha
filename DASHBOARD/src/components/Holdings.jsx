import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { VerticalBar } from "./VerticalBarChart";

const Holdings = () => {
  let [data, setData] = useState([])


  useEffect(() =>{
    axios.get("https://zerodha-1ppf.onrender.com/holding")
     .then(res => setData(res.data))
     .catch(err => console.error(err));
  },[])

  let labels = data.map((subArray) => subArray["name"])

  const Ddata = {
    labels,
    datasets: [
      {
        label: 'Instrument',
        data: data.map((stock) => stock.price ),
        backgroundColor: 'rgba(245, 255, 99, 0.99)',
      },
    ]
  }

  return (
    <>
      <h3 className="title">Holdings {data.length}</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {data.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalBar data={Ddata}/>
    </>
  );
};

export default Holdings;
