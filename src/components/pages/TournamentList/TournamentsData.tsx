import * as React from 'react';
import Datatable from "./DataTable/DataTable";
import axios from "axios";
import {BACKEND_URL} from "../../../constants/url";
import {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import MainLoader from "../../common/Loader/MainLoader";
import {TRow} from "../../../Types/Types";
import Pagination from "../../common/Pagination/Pagination";
import {StTableWrapper} from "./styled";

const TournamentsData = () => {
    const [data, setData] = React.useState([]);
    console.log("data", data);
    const [isLoading, setIsLoading] = useState (true);
    const [currentPage, setCurrentPage] = useState(1);
    console.log("currentPage",currentPage);

    const getTournaments = async (page: number) => {
        try {
            const { data: {data} } = await axios.get(`${BACKEND_URL.TOURNAMENT_URL}?page=${page}&&perPage=10`);
            setData(data);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getTournaments(1);
    }, []);

    const switchPage = (page: number) => {
        setCurrentPage(page);
        getTournaments(page);
    };

    const handleGetTournaments = () => getTournaments(currentPage);



    const [q, setQ] = React.useState("");
    const [direction, setDirection] = React.useState('asc');
    const athletes = data.slice();

    const search = (rows: Array<TRow>) => {
        const columns = rows[0] && Object.keys(rows[0]);
        // @ts-ignore
        return rows.filter((row) => columns.some(
            (column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1)
        );
    };

    const sortBy = (key: string) => {
        if (typeof data[0][key] === 'string') {
            setData(athletes.sort((a, b) => {
                // @ts-ignore
                // @ts-ignore
                return direction === 'asc'
                    ? a[key].toLowerCase() < b[key].toLowerCase() ? -1 : 1
                    : a[key].toLowerCase() > b[key].toLowerCase() ? -1 : 1;
            }));
        } else {
            setData(athletes.sort((a, b) => (direction === 'asc' ? a[key] - b[key] : b[key] - a[key])));
        }
        setDirection(direction === 'asc' ? 'desc' : 'asc');
    };

    return (
        <>
            {isLoading
                ?(<MainLoader />)
                :<StTableWrapper>
                    <div>
                        <TextField
                            id="filled-basic"
                            label="I am searching..."
                            variant="filled" value={q}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setQ(e.target.value)}
                        />
                    </div>
                    <div>
                        <Datatable
                            data={search(data)}
                        // data={data}
                            direction={direction}
                            sortBy={sortBy}
                            getTournaments={handleGetTournaments}
                        />
                    </div>
                    <Pagination switchPage={switchPage} currentPage={currentPage}/>
                </StTableWrapper>
            }
        </>

    );
};

export default TournamentsData;
