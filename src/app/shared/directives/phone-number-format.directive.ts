import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[phone-number-format]'
})

export class PhoneNumberDirective {
    constructor(private element: ElementRef) {
    }

    @HostListener('ngModelChange', ['$event'])
    onModelChange(event: string): void {
        if (event) {
            this.element.nativeElement.value =
                this.transform(event).slice(0, 15);
        }
    }

    transform(value: string): string {
        if (value) {
            let transformedInput: string = value.replace(/[^0-9]/g, '');
            transformedInput = transformedInput.length > 3 ? '(' + transformedInput.substr(0, 3) + ') ' +
                transformedInput.substr(3) : transformedInput.substr(0, 3);
            transformedInput = transformedInput.length > 9 ? transformedInput.substr(0, 9) + '-' +
                transformedInput.substr(9) : transformedInput.substr(0, 9);
            return transformedInput;
        }
    }
}
