import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[appImageUrlV]'
})
export class ImageUrlVDirective {

  constructor(private elRef: ElementRef, private forms: NgForm) {

   }

   @HostListener('input') 
   inputHandle() {
     let element = this.elRef.nativeElement.value;

     if((element.startsWith('http') && element.endsWith('.png') || element.endsWith('.jpg'))) {
       this.elRef.nativeElement.style.borderColor = 'green';
       this.forms.control.setErrors(null);
     } else {
      this.elRef.nativeElement.style.borderColor = 'red';
      this.forms.control.setErrors({'image': true})
     }
   }
}
