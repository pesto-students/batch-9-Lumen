# Utilies available

## Logger
Used for logging purposes. Available log types:

- error: used for consoling error messages.

- warning: used for consoling warning messages.

- info: used for consoling info messages.

- debug: used for consoling debug messages.

## Tokenization
Used for creating and verifying tokens. Available functions

- `tokenizeObject(<payload\>)`: it will return an token for the payload provided.

- `decodeToken(<tokenString>)` : it will return an decoded token if the token string is valid otherwise it will throw an error.