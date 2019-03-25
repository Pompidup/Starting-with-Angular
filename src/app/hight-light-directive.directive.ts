import { Directive,OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightLightDirective]'
})
export class HightLightDirectiveDirective implements OnInit {
  @HostBinding('style.color') myBackgroundColor:string;
  @HostBinding('style.fontSize') myFontSize:string;
  constructor() { }

  ngOnInit() {

  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.myBackgroundColor = 'red';
    this.myFontSize = '30px';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.myBackgroundColor = 'black';
    this.myFontSize = '16px';
  }
}
