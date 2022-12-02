import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[colorful]',
})
export class ColorfulDirective {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'transition',
            '500ms filter linear, 500ms -webkit-filter linear'
        );
        this.setGrayscale();
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.deleteGrayscale();
    }

    @HostListener('mouseout') onMouseOut() {
        this.setGrayscale();
    }

    setGrayscale(): void {
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'filter',
            'grayscale(100%) blur(1px)'
        );
    }

    deleteGrayscale(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, 'filter', '');
    }
}
