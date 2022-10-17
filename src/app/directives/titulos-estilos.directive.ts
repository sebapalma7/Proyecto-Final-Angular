import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTitulosEstilos]'
})
export class TitulosEstilosDirective implements OnInit{
  @Input('appTitulosEstilos') titulos20!: string;

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }
  
  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '20px');
    
  }
}
