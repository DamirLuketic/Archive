import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  public isOpen: boolean = false;

  @HostListener('mouseenter') openMenu(){
    this.isOpen = true;
  };

  @HostListener('mouseleave') closeMenu(){
    this.isOpen = false;
  };

  @HostBinding('class.open') get setStatus(){
    return this.isOpen;
  }

}
