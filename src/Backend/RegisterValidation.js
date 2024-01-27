function Validation(values){
    let error = {}

    if(values.email === "" || values.username === "" || values.password === "" || values.confPassword === ""){
        error.warning = "Please fill all values"
    }
    else if(values.email === ""){
        error.warning = "Email can't be empty"
    }
    else if(values.username === ""){
        error.warning = "Username can't be empty"
    }
    else if(values.password === ""){
        error.warning = "Password can't be empty"
    }
    else if(values.confPassword === ""){
        error.warning = "ConfPassword can't be empty"
    }
    else if(values.password.length < 7 || values.password.length > 16){
        error.warning = "Password must have between 8-16 characters"
    }
    else if(values.password !== values.confPassword && values.email !== "" && values.username !== "" && values.password !== ""){
        error.warning = "Passwords doesn't match"
    }

    return error;
}

export default Validation;