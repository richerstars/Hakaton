import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { BACKEND_URL } from '../../../constants/url';
import { useEffect, useState } from 'react';
import { COLORS } from '../../../constants/colors';
import {StTableDiv} from './styled';

const columns = [
    { field: 'id', headerName: 'ID', width: 100},
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'description', headerName: 'Tournament description', width: 200 },
    { field: 'mode', headerName: 'Mode',width: 140 },
    { field: 'place', headerName: 'Place', width: 130 },
    { field: 'level', headerName: 'Level', width: 170 },
    { field: 'players', headerName: 'Amount ', width: 150 },
    { field: 'number_of_participants', headerName: 'Players', width: 100 },
    { field: 'scenario', headerName: 'Scenario', width: 180 },
    { field: 'status', headerName: 'Status', width: 100 },
];

const TournamentList = ({ theme }: any) => {
    const [ tableData, setTableData ] = useState([]);
    const getTournamets = async () => {
        try {
            const { data } = await axios.get(BACKEND_URL.TOURNAMENT_URL);
            setTableData(data);
        } catch (error) {
            return false;
        }
    };
    useEffect(() => {
        getTournamets();
    }, []);
    return (
        <StTableDiv>
            <DataGrid
                sx={{
                    borderColor: `${theme === 'light'
                        ? `${COLORS.BACKGROUND_HEADER_LIGHT}`
                        : `${COLORS.SEMI_PRIMARY_COLOR_SEC}`}`,
                    backgroundColor: `${theme === 'light' 
                        ? `${COLORS.BACKGROUND_MAIN}` : `${COLORS.TABLE_GRID_DARK}`}`,
                    color: `${theme === 'light' ? `${COLORS.BLACK}` : 'black'}`,
                    fontSize: '20px',
                    textAlign: 'center',
                }}
                rows={tableData}
                columns={columns}
                pageSize={12}
                rowsPerPageOptions={[ 12 ]}
            />
        </StTableDiv>
       
    );
};

export default TournamentList;