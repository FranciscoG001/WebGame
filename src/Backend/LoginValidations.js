function Validation(values){
    let error = {}

    if(values.username === ""){
        error.username = "Username cannot be empty"
    }

    if(values.password === ""){
        error.password = "Password cannot be empty"
    }

    return error;
}

export default Validation;