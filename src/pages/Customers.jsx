import React from 'react'
import { Table } from '../components/index';
import { Grid } from '@mui/material';
import customerList from '../assets/JsonData/customers-list.json'

const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)


const Customers = () => {
    return (
        <div>
            <h2 className="page__header">
            Customers
            </h2>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="card">
                        <div className="card__body">
                            <Table
                            limit="10"
                            headData={customerTableHead}
                            renderHead={(item,index) => renderHead(item, index)}
                            bodyData={customerList}
                            renderBody={(item,index) => renderBody(item,index)} 
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Customers
