import React, { ChangeEvent, useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import axios from 'axios';
import { BACKEND_URL, URL } from '../../../constants/url';
import { StFilters, StWrapper } from './styled';
import { NotificationContext } from '../../../context/NotificationContent';
import Notification from '../../common/Notification/Notification';
import { useNavigate } from 'react-router-dom';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { getFormattedDate } from '../../../helpers/generatorDate';
import { HINTS } from '../../../constants/textValues';

const CreateTournament = () => {
    const [state, setState] = useState({
        name: '',
        description: '',
        mode: 'championship',
        place: '',
        level: '',
        participants: '',
        scenario: '',
        startDate: new Date(),
    });
    const [value, setValue] = React.useState(null);
    const navigate = useNavigate();
    // @ts-ignore
    const {notification, showNotification} = useContext(NotificationContext);

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => setState((prevState =>
        ({...prevState, name: e.target.value})));
    const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => setState((prevState =>
        ({...prevState, description: e.target.value})));
    const handleChangePlace = (e: ChangeEvent<HTMLInputElement>) => setState((prevState =>
        ({...prevState, place: e.target.value})));
    const handleChangeLevel = (e: SelectChangeEvent) => setState((prevState =>
        ({...prevState, level: e.target.value})));
    const handleChangeParticipants = (e: SelectChangeEvent) => setState((prevState =>
        ({...prevState, participants: e.target.value})));
    const handleChangeScenario = (e: SelectChangeEvent) => setState((prevState =>
        ({...prevState, scenario: e.target.value})));

    const handleSubmit = async() => {
        try {
            // @ts-ignore
            const newData = getFormattedDate(value);
            await axios.post(`${BACKEND_URL.CREATE_TOURNAMENT_URL}`, {
                name: state.name,
                description: state.description,
                mode: state.mode,
                place: state.name,
                start_date: state.startDate,
                last_registration_date: newData,
                level: state.level,
                number_of_participants: state.participants,
                scenario: state.scenario
            });
            showNotification({type: "success", message: `${HINTS.CREATE_TOURNAMENT_SUCCESS}`});
            setTimeout(() => navigate(URL.TOURNAMENT_LIST), 3000);
        } catch (error) {
            // @ts-ignore
            showNotification({type: "fail", message: `${error.response.data.data.details[0].message}`});
            return false;
        }
    };
    return (
        <>
            {notification.type && <Notification message={notification.message} type={notification.type}/>}
            <StWrapper>
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
                        <Select sx={{minWidth: 180}} value={state.level} label="level" onChange={handleChangeLevel}>
                            <MenuItem value='beginner'>Beginner</MenuItem>
                            <MenuItem value='middle'>Middle</MenuItem>
                            <MenuItem value='advanced'>Advanced</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Number of participants</InputLabel>
                        <Select sx={{minWidth: 180}} value={state.participants} label="participants"
                                onChange={handleChangeParticipants}>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Scenario</InputLabel>
                        <Select sx={{minWidth: 180}} value={state.scenario} label="scenario"
                                onChange={handleChangeScenario}>
                            <MenuItem value='one match confrontation'>1-match conformation</MenuItem>
                            <MenuItem value='two match confrontation'>2-match conformation</MenuItem>
                            <MenuItem value='to three wins'>to 3 wins</MenuItem>
                        </Select>
                    </FormControl>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Enter start date of tournament"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => (
                                <TextField {...params} helperText={params?.inputProps?.placeholder}/>
                            )}
                        />
                    </LocalizationProvider>
                </StFilters>
                <Button sx={{height: 56, width: 100}} variant="contained" onClick={handleSubmit}>Submit</Button>
            </StWrapper>
        </>
    );
};

export default CreateTournament;
