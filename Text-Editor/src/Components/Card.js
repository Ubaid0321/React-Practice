import React from "react";
import { useState, useEffect } from "react";

export default function Card(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    Apidata();
  }, []);

  const Apidata = async () => {
    let url = "https://dummyjson.com/products";
    let response = await fetch(url);
    let data = await response.json();
    setData(data.products);
  };
 
  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-md-3">
                <div className="card">
                  <img
                    src={item.images[0]}
                    className="card-img-top"
                    height={200}
                    width={50}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      {item.description.slice(0, 15)}.....
                    </p>
                    <p className="card-text">Price: {item.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
