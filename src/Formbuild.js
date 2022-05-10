import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './Formbuild.css'
import Cardcreate from "./Cardcreate";
import { useState } from "react";
var idval=0;
function Formbuild(props)
{
    const[productname,setName]=useState();
    const[producttype,settype]=useState();
    const[manufacturer,setmanufacturer]=useState();
    const[year,setYear]=useState();
    return(
        <div className="Mainform">
        <Grid container spacing={0}>
            <Grid item xs={3} >
            <TextField
            required
            id="outlined-required"
            label="Product name"
            onChange={(event)=> productname=event.target.value}
            placeholder="Enter product name"
            defaultValue={productname}
            />
            </Grid> 
            <Grid item xs={3}>
                <TextField
                required
                id="outlined-required"
                label="Product type"
                placeholder="Enter product type"
                onChange={(event)=> producttype=event.target.value}
                defaultValue={producttype}
               />
            </Grid>
            <Grid item xs={3}>
                <TextField
                required
                id="outlined-required"
                label="Product Manufacturer"
                placeholder="Enter product manufacturer"
                onChange={(event)=>manufacturer =event.target.value}
                defaultValue={manufacturer}
               />
            </Grid>
            <Grid item xs={3}>
                <TextField
                required
                id="outlined-required"
                label="Product make year"
                onChange={(event)=>year =event.target.value}
                placeholder="Enter product make year"
                defaultValue={year}
                />
            </Grid>
        </Grid>
            <Button id="btn" className="Mainform" variant="outlined"
            onClick={() => {
                    const root = document.getElementById('card');
                    let di=document.createElement('div');
                    di.setAttribute("id",idval.toString());
                    root.appendChild(di);
                    const rend = ReactDOM.createRoot(document.getElementById(idval.toString()));
                    rend.render(
                    <React.StrictMode>
                    <Cardcreate name={productname} producttype={producttype} productyear={year} productmanufacturer={manufacturer} cardid={idval.toString()}/>
                    </React.StrictMode>)
                    idval++;
            }}> 
            Submit
            </Button>
            </div>
    )
    
}
export default Formbuild;
/*if(type="update")
                {
                const root = document.getElementById(id);
                const rend = ReactDOM.createRoot(root);
                rend.render(
                <React.StrictMode>
                 <Cardcreate name={productname} producttype={producttype} productyear={year} productmanufacturer={manufacturer} cardid={idval.toString()}/>
                </React.StrictMode>
                );
                }*/