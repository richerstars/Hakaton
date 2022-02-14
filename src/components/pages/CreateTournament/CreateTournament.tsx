import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import axios from 'axios';
import { BACKEND_URL } from '../../../constants/url';
import { StFilters } from './styled';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const CreateTournament = () => {
    const [ state, setState ] = useState({
        name: '',
        description: '',
        mode: 'championship',
        place: '',
        level: '',
        participants: '',
        scenario: '',
        startDate: new Date(),
        lastRegistrDate: new Date(),
    });
    // @ts-ignore
    const handleChangeName = (e) => setState((prevState => ({ ...prevState, name: e.target.value })));
    // @ts-ignore
    const handleChangeDescription = (e) => setState((prevState => ({ ...prevState, description: e.target.value })));
    // @ts-ignore
    const handleChangePlace = (e) => setState((prevState => ({ ...prevState, place: e.target.value })));
    // @ts-ignore
    const handleChangeLevel = (e) => setState((prevState => ({ ...prevState, level: e.target.value })));
    // @ts-ignore
    const handleChangeParticipants = (e) => setState((prevState => ({ ...prevState, participants: e.target.value })));
    // @ts-ignore
    const handleChangeScenario = (e) => setState((prevState => ({ ...prevState, scenario: e.target.value })));
    const handleSubmit = async () => {
        try {
            await axios.post(`${BACKEND_URL.CREATE_TOURNAMENT_URL}`, {
                name: state.name,
                description:state.description,
                mode:state.mode,
                place:state.name,
                start_date: state.startDate,
                last_registration_date:state.lastRegistrDate,
                level:state.level,
                number_of_participants:state.participants,
                scenario:state.scenario
            });
        }catch(error){
            return false;
        }
    };
    return (
        <StFilters>
            <TextField
                required
                label="Name tournament"
                onChange={handleChangeName}
            />
            <TextField
                required
                label="Description of tournament"
                onChange={handleChangeDescription}
            />
            <TextField
                required
                id="outlined-required"
                label="Place"
                onChange={handleChangePlace}
            />
            <FormControl>
                <InputLabel>Level</InputLabel>
                <Select sx={{ minWidth: 180 }}
                    value={state.level}
                    label="level"
                    onChange={handleChangeLevel}
                >
                    <MenuItem value='beginner'>Beginner</MenuItem>
                    <MenuItem value='middle'>Middle</MenuItem>
                    <MenuItem value='advanced'>Advanced</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel>Number of participants</InputLabel>
                <Select sx={{ minWidth: 180 }}
                    value={state.participants}
                    label="participants"
                    onChange={handleChangeParticipants}
                >
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={32}>32</MenuItem>
                    <MenuItem value={64}>64</MenuItem>
                    <MenuItem value={128}>128</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel>Scenario</InputLabel>
                <Select sx={{ minWidth: 180 }}
                    value={state.scenario}
                    label="scenario"
                    onChange={handleChangeScenario}
                >
                    <MenuItem value='one match confrontation'>1-match conformation</MenuItem>
                    <MenuItem value='two match confrontation'>2-match conformation</MenuItem>
                    <MenuItem value='to three wins'>to 3 wins</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" onClick={handleSubmit}>Contained</Button>
        </StFilters>
    );
};

export default CreateTournament;