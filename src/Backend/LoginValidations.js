function Validation(values){
    let error = {}

    if(values.username === "" && values.password !== ""){
        error.warning = "Username can't be empty"
    }
    else if(values.password === "" && values.username !== ""){
        error.warning = "Password can't be empty"
    }
    else if(values.password === "" && values.username === "")
        error.warning = "Username and Password can't be empty"

    return error;
}

export default Validation;