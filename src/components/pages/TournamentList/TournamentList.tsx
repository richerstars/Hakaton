import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { BACKEND_URL } from '../../../constants/url';
import { useEffect, useState } from 'react';
import { StTableDiv } from './styled';
import { COLORS } from '../../../constants/colors';

const columns:any = [
    { field: 'name', headerName: 'Name', width: 200,headerAlign: 'center' },
    { field: 'description', headerName: 'Tournament description', width: 350, headerAlign: 'center', },
    { field: 'mode', headerName: 'Mode', width: 140,headerAlign: 'center', },
    { field: 'place', headerName: 'Place', width: 130,headerAlign: 'center', },
    { field: 'level', headerName: 'Level', width: 170,headerAlign: 'center', },
    { field: 'players', headerName: 'Amount ', width: 150,headerAlign: 'center', },
    { field: 'number_of_participants', headerName: 'Players', width: 100,headerAlign: 'center', },
    { field: 'scenario', headerName: 'Scenario', width: 180,headerAlign: 'center', },
    { field: 'status', headerName: 'Status', width: 100,headerAlign: 'center', },
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
                    backgroundColor: `${theme === 'light' ? `${COLORS.BACKGROUND_MAIN}` : `${COLORS.TABLE_GRID_DARK}`}`,
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