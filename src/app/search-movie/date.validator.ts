
import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function dateValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const year = control.value;
        return (min <= year && year <= max) ? null : { "min": {value: {min, max}}} ;
    };
}
