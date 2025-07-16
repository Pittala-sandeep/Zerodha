import React, { useEffect, useState, useContext } from "react";
import { Tooltip } from "@mui/material";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-1ppf.onrender.com/watchlist")
    .then(res => setData(res.data))
    .catch(err => console.log(er))
  }, [])

  let labels = data.map((subArray) => subArray["name"])

  const Ddata = {
   labels,
   datasets: [
      {
        label: 'Price',
        data : data.map((stock) => stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {data.length} / 50</span>
      </div>

      <ul className="list">
        {data.map((stock, index) => {
          return <WatchlistItem stock={stock} key={index} />;
        })}
      </ul>
      <DoughnutChart data={Ddata}/>
    </div>
  );
};

export default WatchList;

const WatchlistItem = ({ stock }) => {
  let [showWatchListAction, setShowWatchListAction] = useState(false);

  let handleMouseEnter = (event) => {
    setShowWatchListAction(true);
  };

  let handleMouseLeave = (event) => {
    setShowWatchListAction(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListAction && <WatchListAction uuid={stock.name} />}
    </li>
  );
};

const WatchListAction = ({ uuid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uuid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow onClick={handleBuyClick}>
          <button className="buy">Buy</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip title="sell (s)" placement="top" arrow>
          <button className="sell">Sell</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip title="Analytics (A)" placement="top" arrow>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
      </span>
      <span>
        <Tooltip title="More (m)" placement="top" arrow>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
