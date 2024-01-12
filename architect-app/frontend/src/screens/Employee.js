import React,{useState} from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';// Theme

const Employee = () => {
    const [rowData, setRowData] = useState([
        {
            Emp_Id: 101,
            Emp_name: "John Doe",
            Role: "Developer",
            Email: "john.doe@example.com",
            Active: true
          },
          {
            Emp_Id: 102,
            Emp_name: "Jane Smith",
            Role: " Developer",
            Email: "jane.smith@example.com",
            Active: false
          },
          {
            Emp_Id: 103,
            Emp_name: "Bob Johnson",
            Role: "Developer",
            Email: "bob.johnson@example.com",
            Active: true
          },
          {
            Emp_Id: 104,
            Emp_name: "Alice Brown",
            Role: "Developer",
            Email: "alice.brown@example.com",
            Active: true
          },
          {
            Emp_Id: 105,
            Emp_name: "Charlie Davis",
            Role: "Developer",
            Email: "charlie.davis@example.com",
            Active: false
          },
          {
            Emp_Id: 106,
            Emp_name: "Eva Wilson",
            Role: "Developer",
            Email: "eva.wilson@example.com",
            Active: true
          },
          {
            Emp_Id: 107,
            Emp_name: "David Miller",
            Role: "Manager",
            Email: "david.miller@example.com",
            Active: false
          },
          {
            Emp_Id: 108,
            Emp_name: "Grace Taylor",
            Role: "Manager",
            Email: "grace.taylor@example.com",
            Active: true
          },
          {
            Emp_Id: 109,
            Emp_name: "Frank Martinez",
            Role: "Team Lead",
            Email: "frank.martinez@example.com",
            Active: true
          },
          {
            Emp_Id: 110,
            Emp_name: "Helen Johnson",
            Role: "Developer",
            Email: "helen.johnson@example.com",
            Active: false
          },
          {
            Emp_Id: 111,
            Emp_name: "Jack Turner",
            Role: "Developer",
            Email: "jack.turner@example.com",
            Active: true
          },
          {
            Emp_Id: 112,
            Emp_name: "Karen White",
            Role: "Developer",
            Email: "karen.white@example.com",
            Active: false
          },
          {
            Emp_Id: 113,
            Emp_name: "Leonard Clark",
            Role: "Developer",
            Email: "leonard.clark@example.com",
            Active: true
          },
          {
            Emp_Id: 114,
            Emp_name: "Megan Harris",
            Role: "Developer",
            Email: "megan.harris@example.com",
            Active: false
          },
          {
            Emp_Id: 115,
            Emp_name: "Oscar Turner",
            Role: "Developer",
            Email: "oscar.turner@example.com",
            Active: true
          },
          {
            Emp_Id: 116,
            Emp_name: "Pamela Brown",
            Role: "Developer",
            Email: "pamela.brown@example.com",
            Active: true
          },
          {
            Emp_Id: 117,
            Emp_name: "Quincy Adams",
            Role: "Developer",
            Email: "quincy.adams@example.com",
            Active: false
          },
          {
            Emp_Id: 118,
            Emp_name: "Rachel Green",
            Role: "Developer",
            Email: "rachel.green@example.com",
            Active: true
          },
          {
            Emp_Id: 119,
            Emp_name: "Samuel Taylor",
            Role: "Team Lead",
            Email: "samuel.taylor@example.com",
            Active: false
          },
          {
            Emp_Id: 120,
            Emp_name: "Tina Turner",
            Role: "Developer",
            Email: "tina.turner@example.com",
            Active: true
          }
      ]);
      const [manager, setManager] = React.useState('');
      const handleChange = (event) => {
        setManager(event.target.value);
      };
      
      // Column Definitions: Defines & controls grid columns.
      const [colDefs, setColDefs] = useState([
        { field: "Emp_name" },
        { field: "Emp_Id" },
        { field: "Role" },
        { field: "Email" },
        { field: "Active" },
       
      ]);
      const emp_details=()=>{

      }
  return (
    <div className="ag-theme-quartz" style={{ height: 400 }}>
     <div className='my-3 mx-56'>
     <FormControl>
        <InputLabel id="demo-simple-select-label">Manager</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={manager}
          label="Age"
          sx={{ width: 300 }}
          onChange={handleChange}
        >
          <MenuItem value={10}></MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

     </div>
     <div className='my-3 mx-56'>

      <FormControl>
        <InputLabel id="demo-simple-select-label">Teamlead</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={manager}
          sx={{ width: 300 }}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}></MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
     </div>
     <div className='my-3 mx-56'>
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={emp_details}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Developers" />}
    />
     </div>
          <AgGridReact rowData={rowData} columnDefs={colDefs} />

         
    </div>
  )
}

export default Employee