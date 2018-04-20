import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameVaidator {
    static connotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0) {
            return {
                connotContainSpace: true
            }
        }
        return null;
    }
}