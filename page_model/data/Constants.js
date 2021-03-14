import dotenv from 'dotenv'
dotenv.config()

const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.VALID_USER_USERNAME,
        PASSWORD: process.env.VALID_USER_PASSWORD
    },
    INVALID_USER:{
        USERNAME: process.env.INVALID_USER_USERNAME,
        PASSWORD: process.env.INVALID_USER_PASSWORD
    },
}
export default CREDENTIALS