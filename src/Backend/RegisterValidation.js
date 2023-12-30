function Validation(values){
    let error = {}

    if(values.email === ""){
        error.email = "Email cannot be empty"
    }

    if(values.username === ""){
        error.username = "Username cannot be empty"
    }

    if(values.password === ""){
        error.password = "Password cannot be empty"
    }

    if(values.confPassword === ""){
        error.confPassword = "ConfPassword cannot be empty"
    }

    if(values.password !== values.confPassword){
        error.password = "Passwords does not match!"
        error.confPassword = "Passwords does not match!"
    }

    return error;
}

export default Validation;