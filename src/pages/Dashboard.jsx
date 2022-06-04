import { Grid } from "@mui/material";
import React from "react";
import statusCards from "../assets/JsonData/status-card-data.json";
import { StatusCard, Table, Badge } from "../components/index";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'


const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Store Customers",
      data: [20, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

const topCustomers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      username: "john doe",
      order: "490",
      price: "$15,870",
    },
    {
      username: "frank iva",
      order: "250",
      price: "$12,251",
    },
    {
      username: "anthony baker",
      order: "120",
      price: "$10,840",
    },
    {
      username: "frank iva",
      order: "110",
      price: "$9,251",
    },
    {
      username: "anthony baker",
      order: "80",
      price: "$8,840",
    },
  ],
};

// const renderCustomerHead = (item, index) => {
//     <th key={index}>{item}</th>
// }
const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const latestOrders = {
  header: ["order id", "user", "total price", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    },
  ],
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
  </tr>
);

const Dashboard = () => {
  // const themeReducer = useSelector(state => state.ThemeReducer.mode)

 
  return (
    <div>
      <h2 className="page__header">Dashboard</h2>
     
      <div className="dashboard__container">
      
        {/* <Grid container spacing={2}> */}
         {/* <Grid item xs={5} sm={5} md={5} lg={5} xl={5}> */}
            {/* status cards */}
            <Grid container spacing={2}>
              {statusCards.map((item, index) => (
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={index}>
                  <StatusCard
                    icon={item.icon}
                    count={item.count}
                    title={item.title}
                  />
                </Grid>
              ))}
            </Grid>
          {/* </Grid> */}

          {/* Chart container */}
          {/* <Grid item xs={6} sm={6} md={7} lg={7} xl={7}>
            <div className="card full__height">
              <Chart
               options={themeReducer === 'theme-mode-dark' ? {
                ...chartOptions.options,
                theme: { mode: 'dark'}
            } : {
                ...chartOptions.options,
                theme: { mode: 'light'}
            }}
            series={chartOptions.series}
            type='line'
            height='100%'
              />
            </div>
          </Grid> */}
         {/* </Grid> */}

            {/* <Grid container spacing={2} style={{marginTop: "2px"}}>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
              <div className="card">
                <div className="card__header">
                  <h3>top customers</h3>
                </div>
                <div className="card__body">
                  <Table
                    headData={topCustomers.head}
                    renderHead={(item, index) =>
                      renderCustomerHead(item, index)
                    }
                    bodyData={topCustomers.body}
                    renderBody={(item, index) =>
                      renderCustomerBody(item, index)
                    }
                  />
                </div>
                <div className="card__footer">
                  <Link to="/">view all</Link>
                </div>
              </div>
            </Grid>

            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
              <div className="card">
                <div className="card__header">
                  <h3>Latest Orders</h3>
                </div>
                <div className="card__body">
                  <Table
                    headData={latestOrders.header}
                    renderHead={(item, index) =>
                        renderOrderHead(item, index)
                    }
                    bodyData={latestOrders.body}
                    renderBody={(item, index) =>
                        renderOrderBody(item, index)
                    }
                  />
                </div>
                <div className="card__footer">
                  <Link to="/">view all</Link>
                </div>
              </div>
            </Grid> */}

         {/* </Grid> */}
      </div>
    </div>
  );
};

export default Dashboard;
