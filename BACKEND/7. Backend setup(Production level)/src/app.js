import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//.use method is used for middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, //Allows cookies and authentication headers to be sent with requests.
}))

app.use(express.json({limit: "16kb"})); //for  Parses incoming JSON payloads (e.g., from POST or PUT requests) into JavaScript objects & limit is used as it Limits the size of JSON payloads to 16 kilobytes to mitigate denial-of-service (DoS) attacks from excessively large payloads.

app.use(express.urlencoded({extended: true, limit: "16kb"})); //

app.use(express.static("public")); //for serving static files

app.use(cookieParser());    //for parsing cookies Parses cookies from incoming requests and makes them available in req.cookies



export {app}