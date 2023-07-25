import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,

} from '@material-ui/core';



const MyTable = () => {

  const rows = [
    { id: 1, name: 'John Doe', age: 30, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 28, email: 'jane.smith@example.com' },
    { id: 3, name: 'Bob Johnson', age: 35, email: 'bob.johnson@example.com' },
  ];

  return (
    <TableContainer >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell >
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;