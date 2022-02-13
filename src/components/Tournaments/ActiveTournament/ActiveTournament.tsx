import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { BACKEND_URL } from '../../../constants/url';
import { useEffect,useState } from 'react';
import { StTableDiv } from './styled';

const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'description', headerName: 'Tournament description', width: 200 },
    { field: 'mode', headerName: 'Mode',width: 140 },
    { field: 'place', headerName: 'Place', width: 130 },
    { field: 'start_date', headerName: 'Start competition', width: 200 },
    { field: 'last_registration_date', headerName: 'End of registration', width: 200 },
    { field: 'level', headerName: 'Level of tournament', width: 200 },
    { field: 'players', headerName: 'Amount of players', width: 200 },
    { field: 'number_of_participants', headerName: 'All quantity of players', width: 200 },
    { field: 'scenario', headerName: 'Scenario', width: 200 },
    { field: 'status', headerName: 'Status', width: 200 }
];

const ActiveTournament = () => {
    const [tableData,setTableData]=useState([]);
    const getTournamets = async () => {
        try {
            const {data} = await axios.get(BACKEND_URL.TOURNAMENT_URL, { params: { status: 'open',perPage: 100 } });
            setTableData(data);
        }catch (error) {
            return false;
        }
    };
    useEffect(() => {
        getTournamets();
    },[]);
    return (
        <StTableDiv>
            <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={12}
                rowsPerPageOptions={[12]}
            />
        </StTableDiv>
    );
};
export default ActiveTournament;