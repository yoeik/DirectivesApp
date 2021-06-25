import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective{

  @Input() 
  public set customIf(condicion : boolean) {
  if(condicion){
  this.viewContainer.createEmbeddedView(this.tr)
  }else{
    this.viewContainer.clear();
  }

}
  

  constructor(private tr: TemplateRef<HTMLElement>, 
              private viewContainer: ViewContainerRef) {


   }

  
}
