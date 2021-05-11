export const maxCount = (maxCountValue) => (value) => {
    if(String(value).length > maxCountValue){
        return "Max value is " + maxCountValue;
    }
    else{
        return undefined;
    }
}
    

export const socialNetworkLink = (value) =>{
    if(value == null){
        return undefined;
    }
    if((((typeof(value) != "undefined")) && (String(value).indexOf('https://') == -1)) || (value == null)){
        return "Incorrect link"
    }
    else{
        return undefined;
    }
}



export const required = value => (value ? undefined : 'Required')

export const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined)
