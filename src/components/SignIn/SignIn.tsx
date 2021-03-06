import React, {useContext} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import { StyledParagraphSignOut } from '../common/Paragraph/styled';
import { StForm, StHeadLiner } from '../common/Form/styled';
import { StSubmitInput } from '../common/Input/styled';
import { BACKEND_URL,URL } from '../../constants/url';
import { HINTS, TEXT_VALUES } from '../../constants/textValues';
import { REG_EXP } from '../../constants/regExp';
import Notification from "../common/Notification/Notification";
import {NotificationContext} from "../../context/NotificationContent";
import {HelperRole} from '../../helpers/FormtInfo';
import { TContext } from '../../Types/Types';

const SignIn = () => {
    const {
        handleSubmit,
        formState: {errors},
        control
    } = useForm({
        mode: 'onChange',
    });

    const navigate = useNavigate();

    // @ts-ignore
    const {notification, showNotification} = useContext<TContext>(NotificationContext);
    return (
        <>
            { notification.type && <Notification message={notification.message} type={notification.type} />}
            <StForm
                onSubmit={handleSubmit((values) => {
                    HelperRole(values, showNotification, navigate,BACKEND_URL.SIGN_IN,URL.TOURNAMENT_LIST);})}>
                <h1>Log In</h1>
                <StHeadLiner/>
                <Controller
                    name="login"
                    control={control}
                    rules={{required: true, pattern: REG_EXP.LOGIN_REG_EXP}}
                    render={({field: {onChange}}) => {
                        return <Input hintText={HINTS.LOGIN}
                            text={TEXT_VALUES.LOGIN[0].toUpperCase()+TEXT_VALUES.LOGIN.slice(1)}
                            onChange={onChange} error={getError(errors.login?.type, TEXT_VALUES.LOGIN)}/>;
                    }}/>
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: true, pattern: REG_EXP.PASSWORD_REG_EXP,
                        minLength: 8, maxLength: 20
                    }}
                    render={({field: {onChange}}) => {
                        return <Input hintText={HINTS.PASSWORD_HINT}
                            text={TEXT_VALUES.PASSWORD[0].toUpperCase()+TEXT_VALUES.PASSWORD.slice(1)}
                            name={TEXT_VALUES.PASSWORD}
                            onChange={onChange} error={getError(errors.password?.type, TEXT_VALUES.PASSWORD)}/>;
                    }}/>
                <StHeadLiner/>
                <StSubmitInput type="submit" value={TEXT_VALUES.SUBMIT_VALUE}/>
                <StyledParagraphSignOut>
                Forgot password?
                    <Link to={URL.FORGOT_PASSWORD}>Restore a password</Link>
                </StyledParagraphSignOut>
            </StForm>
        </>
    );
};

export default SignIn;
