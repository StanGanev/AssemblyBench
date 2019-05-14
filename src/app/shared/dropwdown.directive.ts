import { Directive, HostListener, HostBinding } from '@angular/core';


@Directive({
    selector: '[appDropdown]'
})
export class DropwdownDirective {
    @HostBinding('class.open')isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
    @HostListener('mouseleave') closeDropdown() {
            this.isOpen = false;
    }
}