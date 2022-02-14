import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { BACKEND_URL } from '../../../constants/url';
import { useEffect, useState } from 'react';
import { COLORS } from '../../../constants/colors';
import {StTableDiv} from './styled';

const columns = [
    { field: 'id', headerName: 'ID', width: 100},
    { field: 'login', headerName: 'Login', width: 300 },
    { field: 'email', headerName: 'E-mail', width: 450 },
    { field: 'games', headerName: 'Games',width: 100 },
    { field: 'wins', headerName: 'Wins', width: 100 },
    { field: 'loses', headerName: 'Loses', width: 100 },
    { field: 'draws', headerName: 'Draws', width: 100 },
];

const Players = ({ theme }: any) => {
    const [ tableData, setTableData ] = useState([]);
    const getPlayers = async () => {
        try {
            const { data } = await axios.get(BACKEND_URL.PLAYERS_URL);
            setTableData(data);
        } catch (error) {
            return false;
        }
    };
    useEffect(() => {
        getPlayers();
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

export default Players;