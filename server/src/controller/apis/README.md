# APIs Available.

## User APIs

- Health API: Request -> GET: `/api/v1/user/health` . 

    Expected Responses:
    1. User API reachable => Response: status= 200 and body = `{status: 'Ok'}` 
    2. User API not reachable => Response: No response or Request timeout.

 - SignUp API: Request -> POST : `/api/v1/user/signup` . 

    Expected Responses:
    1. Successful sign up => Response: status= 200 and body = `{msg: 'Working', token: <userTokenString> }` 
    2. User already exists => Coimng soon :).

 - SignIn API: Request -> POST : `/api/v1/user/signin` . 

    Expected Responses:
    1. Successful sign in => Response: status= 200 and body = `{msg: 'Working', token: <userTokenString> }` 
    2. User does not exists => Coimng soon :) 

    3. Wrong Password => Coming soon :)    
