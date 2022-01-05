import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../redux/thunks/appThunks';


// https://jsonplaceholder.typicode.com/users



const Main = () => {
    const dispatch = useDispatch();
    // const loading = useSelector(state => state.loading);
    // const userList = useSelector(state => state.userList);

    // const { loading, userList } = useSelector(state => state);

    const { loading } = useSelector(state => state.app)
    const { userList } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getUserList());
    }, []);


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
                        loading ? 'Loading' :
                            userList.map((row) => (
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
