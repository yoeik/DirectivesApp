import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ErrMsg]'
})
export class ErrMsgDirective  implements OnInit, OnChanges{

  private _color: string ='red';
  private _texto: string = 'Este campo es obligatorio'
  private _valido: boolean= false;

htmlElement:ElementRef<HTMLElement>;

@Input() set color (valor:string){
  this._color = valor;
  this.setColor();
  
}

@Input() set texto (valor: string){
  this._texto = valor;
  this.setMensaje();

}
@Input () set valido(valor: boolean){
  if (valor){
    this.htmlElement.nativeElement.classList.add('hidden')
  }else{
    this.htmlElement.nativeElement.classList.remove('hidden')
    
  }
  

}  

  constructor(private el:ElementRef<HTMLElement>) { 
      this.htmlElement = el;  
  }

  ngOnInit(){    
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }
  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text')
    
  }
  
  setColor(){
    this.htmlElement.nativeElement.style.color =this._color;
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this._texto;
    this.htmlElement.nativeElement.classList.add('form-text')
  }
  ngOnChanges(changes:SimpleChanges): void {

  //   if(changes.texto){
  //   const texto = changes.texto.currentValue;
  //   console.log(changes);
  // }
  // if(changes.color){
    // this.htmlElement.nativeElement.style.color =this.color;

  // }
    
      
  }
}
