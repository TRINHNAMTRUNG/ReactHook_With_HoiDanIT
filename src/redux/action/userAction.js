export const FETCH_USER_LOGIN_SUCCESS = "FETCH_USER-LOGIN_SUCCESS";
export const doLogin = (data)=> {
    return (
        {
            type: FETCH_USER_LOGIN_SUCCESS,
            data: data
        }
    )
}