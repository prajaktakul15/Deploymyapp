import { AbstractControl, FormControl, FormGroup, ValidatorFn } from "@angular/forms";


export function ageRange(control:FormControl ):{}|null{
    let min = 18
    let max = 30
    let value = control.value
    if(value!="" && (value<min || value>max))
    {
        return {'ageRange':true,'min':min,'max':max}
        // here we Return Error.
    }
    return null;
}


export function passwordMatcher(srcName:string,desName:string):ValidatorFn{
    return function(group:AbstractControl):{}|null{
        let passvalue  = group.get(srcName)?.value 
        let cpassvalue = group.get(desName)?.value 
        if(passvalue!="" && cpassvalue!="" && passvalue!=cpassvalue)
        {
            let cpasswordcontrol = group.get(desName)
            cpasswordcontrol?.setErrors({'match':true})
            //return {}
        }
        return null
    }
}
