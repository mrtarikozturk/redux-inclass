import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react';

const fakeUserList = [
    { name: 'Ed', username: 'mred', email: 'mred@mail.com' },
    { name: 'Felix', username: 'mrfelix', email: 'mrfelix@mail.com' },
    { name: 'John', username: 'mrjohn', email: 'mrjohn@mail.com' },
    { name: 'Tom', username: 'mrtom', email: 'mrtom@mail.com' },
    { name: 'Jos', username: 'mrjos', email: 'mrjos@mail.com' },
]

const Main = () => {
    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        fakeUserList.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Main
