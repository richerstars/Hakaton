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

// function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const ActiveTournament = () => {
    const getTournamets = async () => {
        try {
            const {data} = await axios.get(BACKEND_URL.TOURNAMENT_URL, { params: { status: 'open' } });
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
                            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                            <StyledTableCell align="right">Calories</StyledTableCell>
                            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Calories</StyledTableCell>
                            <StyledTableCell align="right">Calories</StyledTableCell>
                            <StyledTableCell align="right">Calories</StyledTableCell>
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