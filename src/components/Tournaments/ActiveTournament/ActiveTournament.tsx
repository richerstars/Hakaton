import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableRow, StyledTableCell } from './styled';
import { StTableWrapper } from './styledMain';
import { BACKEND_URL } from '../../../constants/url';
import axios from 'axios';
import { useEffect, useState } from 'react';


const ActiveTournament = () => {
    const getTournamets = async () => {
        try {
            const {data} = await axios.get(BACKEND_URL.TOURNAMENT_URL, { params: { status: 'active' } });
            setData(data);
        }catch (error) {
            return false;
        }
    };
    useEffect(() => {
        getTournamets();
    },[]);
    const [data,setData]=useState([]);
    return (
        <StTableWrapper>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Title room</StyledTableCell>
                            <StyledTableCell align="right">Description</StyledTableCell>
                            <StyledTableCell align="right">LvL players</StyledTableCell>
                            <StyledTableCell align="right">Mode</StyledTableCell>
                            <StyledTableCell align="right">Quantity of members</StyledTableCell>
                            <StyledTableCell align="right">City</StyledTableCell>
                            <StyledTableCell align="right">Registrated</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row:any) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.description}</StyledTableCell>
                                <StyledTableCell align="right">{row.level}</StyledTableCell>
                                <StyledTableCell align="right">{row.mode}</StyledTableCell>
                                <StyledTableCell align="right">{row.number_of_participants}</StyledTableCell>
                                <StyledTableCell align="right">{row.place}</StyledTableCell>
                                <StyledTableCell align="right">{row.players}</StyledTableCell>
                                <StyledTableCell align="right">{row.status}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </StTableWrapper>
    );
};
export default ActiveTournament;