export const REG_EXP = {
    PASSWORD_REG_EXP: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/s,
    EMAIL_MAIN_REG_EXP: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    LOGIN_REG_EXP: /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,19}$/,
};