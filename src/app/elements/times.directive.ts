import { Directive,ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private containerRef: ViewContainerRef,
    private tempRef: TemplateRef<any>) { }

  @Input('appTimes') set render(times: number){

    this.containerRef.clear();

    for (let i = 0; i < times; i++) {
      this.containerRef.createEmbeddedView(this.tempRef, {})
    }

}
}
