import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

//NB! Don't forget to add new directives
@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    @HostBinding('class.open') isOpen = false;
    //with the class. property, you can attach or detach CSS classes 
    //(in this case we need 'open' CSS class)
    //if isOpen is FALSE, the class is NOT attached!!
    //if isOpen is TRUE, the class IS attached!!

    ngOnInit() {
        
    }

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        //method listens to a click, 
        //automatically changes the isOpen to which it is currently not
        //HostBinding does the rest by checking what is isOpen's value
    }
}