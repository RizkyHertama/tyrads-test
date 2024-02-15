// Content.jsx
import React, { useState, useEffect, useRef } from "react"; 
// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faSmile, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Chart from "react-apexcharts";
import GaugeChart from "react-gauge-chart";

import "./Content.css";




function Content() {


const [options, setOptions] = useState({
  chart: {
    id: "basic-bar",
  },
  xaxis: {
    categories: ["Oct", "Nov", "Des", "Jan", "Feb"], 
  },
});

const [series, setSeries] = useState([
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49],
  },
]);


  return (
    <div className="content">
      <div className="left-column">
        {/* Left Side */}
        <div className="left-title">
          <h3>
            Hello, Jhon .D
            <div className="search-icon-container">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
          </h3>
          <p>View and control your finance here!</p>
        </div>

        {/* Cards */}
        <div className="card-container">
          <div className="card-left">
            <h4
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Balance statistics
              <button
                style={{
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Filter
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{ marginLeft: "5px" }}
                />
              </button>
            </h4>
            <div className="row">
              <div className="col-stat">
                <h3>$564</h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/10693/10693001.png"
                    style={{
                      width: "30px",
                      height: "auto",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    Your balance account
                  </p>
                </div>

                <hr style={{ border: "1% solid black", opacity: 0.5 }} />
                <p
                  style={{
                    fontSize: "12px",
                    opacity: 0.5,
                  }}
                >
                  Always see your earnings updates
                </p>
              </div>
              <div className="col-stat">
                <div className="chart-container">
                  <Chart
                    options={options}
                    series={series}
                    type="bar"
                    width="220"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="card-left"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="https://cdn.vectorstock.com/i/preview-1x/95/94/credit-card-vector-979594.jpg"
              alt="Girl"
              style={{
                width: "calc(100% - 10px)",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="card-container">
          <div className="card-left">
            <h4
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              List of item to buy
            </h4>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>02:00</th>
                  <th style={{ textAlign: "center", width: "200px" }}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </th>
                  <th style={{ textAlign: "left" }}>05:00</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "left", fontSize: "12px" }}>
                    Sat August 12
                  </td>
                  <td style={{ textAlign: "center", width: "20px" }}></td>
                  <td style={{ textAlign: "left", fontSize: "12px" }}>
                    Sat September 12
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="shopping-footer">
              <div>0/3 Shopping list</div>
              <div>+ Add an item</div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-custom">
                  <div className="card-check">
                    <div className="card-body">
                      <input type="checkbox" />
                      <span>Macbook</span>
                      <FontAwesomeIcon
                        icon={faEllipsisV}
                        style={{ float: "right" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-custom">
                  <div className="card-check">
                    <div className="card-body">
                      <input type="checkbox" />
                      <span>Bycycle</span>
                      <FontAwesomeIcon
                        icon={faEllipsisV}
                        style={{ float: "right" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-custom">
                  <div className="card-check">
                    <div className="card-body">
                      <input type="checkbox" />
                      <span>Motorcycle</span>
                      <FontAwesomeIcon
                        icon={faEllipsisV}
                        style={{ float: "right" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-custom">
                  <div className="card-check">
                    <div className="card-body">
                      <input type="checkbox" />
                      <span>Iphone 14 pro max</span>
                      <FontAwesomeIcon
                        icon={faEllipsisV}
                        style={{ float: "right" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-left">
            <h4>Eshter Howard</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#DCF8C6",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <p style={{ margin: "0" }}>Are you ready?</p>
              </div>
              <div style={{ marginLeft: "10px" }}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/019/515/378/non_2x/portrait-of-a-happy-man-with-necktie-avatar-of-a-successful-businessman-with-eyeglasses-free-vector.jpg"
                  alt="Boy"
                  style={{ width: "30px", borderRadius: "50%" }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "10px",
              }}
            >
              <div style={{ marginRight: "10px" }}>
                <img
                  src="https://st5.depositphotos.com/3854637/66021/v/450/depositphotos_660212140-stock-illustration-delight-admiration-woman-amazed-face.jpg"
                  alt="Girl"
                  style={{ width: "30px", borderRadius: "50%" }}
                />
              </div>
              <div
                style={{
                  backgroundColor: "#FFD3E0",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <p style={{ margin: "0" }}>I have prepared everything</p>
              </div>
            </div>

            {/* Chat Field */}
            <div className="chat-container">
              <div className="chat-input-container">
                <input
                  type="text"
                  placeholder="Type your message"
                  className="chat-input"
                />
                <div className="chat-actions">
                  <FontAwesomeIcon
                    icon={faSmile}
                    style={{ marginRight: "10px" }}
                  />{" "}
                  <FontAwesomeIcon icon={faPaperclip} />{" "}
                  <button>Send Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card-left">
            <h4
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "0",
              }}
            >
              Last Transaction
              <p style={{ fontSize: "14px" }}>Newest &nbsp; Oldest</p>
            </h4>
            <hr style={{ border: "1% solid black", opacity: 0.5 }} />
            <div className="spending-item">
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxcxPhm--Vuj0ZNeWv2ARKwbGSzGy257tJvhX51k_vcvB95YPw"
                alt="40px"
              />
              <div className="spending-info">
                <h4>Bessie Cooper</h4>
                <p>02 July 2023</p>
              </div>
              <div className="spending-right">
                <span>
                  -$3,000
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    style={{ marginLeft: "20px" }}
                  />
                </span>
              </div>
            </div>
            <hr style={{ border: "1% solid black", opacity: 0.5 }} />
            <div className="spending-item">
              <img
                src="https://img.freepik.com/premium-vector/portrait-beautiful-half-turn-latin-woman_729684-323.jpg"
                alt="40px"
              />
              <div className="spending-info">
                <h4>Guy Hawkins</h4>
                <p>02 July 2023</p>
              </div>
              <div className="spending-right">
                <span>
                  -$1,970
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    style={{ marginLeft: "20px" }}
                  />
                </span>
              </div>
            </div>
            <hr style={{ border: "1% solid black", opacity: 0.5 }} />
            <div className="spending-item">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/007/410/738/small/bearded-man-illustration-in-flat-cartoon-style-free-vector.jpg"
                alt="40px"
              />
              <div className="spending-info">
                <h4>Floyd Miles</h4>
                <p>02 July 2023</p>
              </div>
              <div className="spending-right">
                <span>
                  -$5,000
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    style={{ marginLeft: "20px" }}
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="card-left">
            <h4
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Analytics
              <FontAwesomeIcon icon={faEllipsisV} />
            </h4>
            {/* Gauge Chart */}
            <GaugeChart
              id="gauge-chart5"
              nrOfLevels={420}
              arcsLength={[0.3, 0.5, 0.2]}
              colors={["#5BE12C", "#F5CD19", "#EA4228"]}
              percent={0.9}
              arcPadding={0.02}
              textColor="black"
              style={{
                // borderRadius: "10px",
                // backgroundColor: "#535ce5",
                width: "280px",
                margin: "auto",
              }}
            />
          </div>
        </div>
      </div>

      <div className="right-column">
        {/* Right Side */}
        <div className="card">
          <h3>Expenses and Income</h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th className="ExIn-title" style={{ textAlign: "left" }}>
                  Expense
                </th>
                <th
                  className="ExIn-divider"
                  style={{ textAlign: "center", width: "20px" }}
                >
                  |
                </th>
                <th className="ExIn-title" style={{ textAlign: "right" }}>
                  Income
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "left" }}>75%</td>
                <td style={{ textAlign: "center", width: "20px" }}>vs</td>
                <td style={{ textAlign: "right" }}>40%</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left", fontSize: "12px" }}>5.653</td>
                <td style={{ textAlign: "center", width: "20px" }}>|</td>
                <td style={{ textAlign: "right", fontSize: "12px" }}>2.656</td>
              </tr>
            </tbody>
          </table>
          <div className="boxStyles">
            <div className="blueBoxStyles"></div>
            <div className="orangeBoxStyles"></div>
          </div>
        </div>

        <div className="card">
          <h3
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Latest Spending
            <FontAwesomeIcon icon={faEllipsisV} />
          </h3>
          <div className="spending-item">
            <img
              src="https://static.vecteezy.com/system/resources/previews/006/254/306/original/mobile-shopping-with-courier-delivery-smartphone-online-shop-metaphor-3d-cartoon-illustration-vector.jpg"
              alt="40px"
            />
            <div className="spending-info">
              <h4>Online store</h4>
              <p>May 30 2023 at 08.00 pm</p>
            </div>
          </div>
          <hr style={{ border: "1% solid black", opacity: 0.5 }} />
          <div className="spending-item">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/922/242/original/hospital-building-cartoon-icon-illustration-healthy-building-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg"
              alt="40px"
            />
            <div className="spending-info">
              <h4>Pay the hospital</h4>
              <p>May 28 2023 at 10.00 pm</p>
            </div>
          </div>
          <hr style={{ border: "1% solid black", opacity: 0.5 }} />
          <div className="spending-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT098BhfbxblXwYZX0ZIRJuB7vZFcIilB-ffg&usqp=CAU"
              alt="40px"
            />
            <div className="spending-info">
              <h4>Tickets</h4>
              <p>May 10 2023 at 12.00 pm</p>
            </div>
          </div>
          <h5>
            View All <FontAwesomeIcon icon={faArrowRight} />
          </h5>
        </div>

        <div className="card">
          <h4 className="text-center">Go To Premium</h4>
          <div className="image-container">
            <img
              src="https://www.pngitem.com/pimgs/m/45-453616_crown-crown-cartoon-hd-png-download.png"
              alt="Logo"
              className="crown-image"
            />
          </div>
          <h3 className="text-center">Need more features?</h3>
          <p>Update your account to premium to get more features.</p>
          <button className="custom-button">Get Now</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
