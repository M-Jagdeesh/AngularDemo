import { NgModule } from '@angular/core';
import { PhoneNumberDirective } from './directives/phone-number-format.directive';

@NgModule({
    declarations: [
        PhoneNumberDirective
    ],
    exports: [
        PhoneNumberDirective
    ]
})
export class SharedModule { }
