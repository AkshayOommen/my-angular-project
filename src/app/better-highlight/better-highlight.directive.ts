import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() { 
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;  
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
