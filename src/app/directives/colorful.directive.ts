import {Directive, ElementRef, Renderer2,HostListener} from '@angular/core';
 
@Directive({
    selector: '[colorful]'
})
export class ColorfulDirective{

    constructor(private elementRef: ElementRef, private renderer: Renderer2){
        this.setGrayscale()
    }

    @HostListener('mouseenter') onMouseEnter(){
        this.deleteGrayscale()
    }

    @HostListener('mouseout') onMouseOut(){
        this.setGrayscale()
    }

    setGrayscale() {
        console.log('test')
        this.renderer.setStyle(this.elementRef.nativeElement, "filter", "grayscale(100%)");
    }

    deleteGrayscale() { 
        this.renderer.setStyle(this.elementRef.nativeElement, "filter", "");
    }

}