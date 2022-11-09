import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //atributos
  usuario: String = 'Begoña Olea';
  observable! : Observable<number>;

  constructor(){
  }

  onIniciarObservable(){
    this.observable = new Observable((observer)=>{
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(()=>{
      observer.next(4);
      observer.complete();
      }, 1000);
      });
  }

  onSuscribirnosAlObservable(){
    this.observable.subscribe(
       n => console.log('recogo' + n),
       error => console.log('se produjo un error ' + error),
       () => console.log('se completo')
    );
  }

  



}
