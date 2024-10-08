import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();

    return(
        <div>
            <h1>Oops..!</h1>
            <h1>Something went wrong</h1>
            {err.status}:{err.statusText}
        </div>
    );
}

export default Error;