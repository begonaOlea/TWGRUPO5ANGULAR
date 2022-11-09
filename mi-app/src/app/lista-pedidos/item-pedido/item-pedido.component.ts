
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { LogService } from 'src/app/servicios/log.service';
import { PedidosHttpService } from 'src/app/servicios/pedidos-http.service';
import { PedidosService } from 'src/app/servicios/pedidos.service';

@Component({
  selector: 'app-item-pedido',
  templateUrl: './item-pedido.component.html',
  styleUrls: ['./item-pedido.component.css'],
})
export class ItemPedidoComponent implements OnInit {

  @Input() id: number = 0;
  @Input() descripcion: string = '';
  @Input() entregado: boolean = false;
  


  
  //Emisor de eventos y paso el id del pedido modificado
  @Output() entregaRealizada: EventEmitter<number> =
                     new EventEmitter<number>();

  constructor(private log: LogService,
              private  pedServ: PedidosService,
              private  pedidoService: PedidosHttpService) { }

  ngOnInit(): void {
  }

  onEntregarPedido(){
     this.log.info(' llamar a un servicio que diga que esta entregado');
    // this.pedServ.cambiarEstadoPedido(this.id, true);

    let pMod = {id: this.id, desc:this.descripcion, user: 'Luis',
         entregado: true, fechaPedido: new Date()}
    this.pedidoService.update(pMod).subscribe(
      (p: Pedido) =>   //emito un evento para que el padre sepa que he entregado
      this.entregaRealizada.emit(this.id)
    );   
  }

  onBorrarPedido(){
    this.log.info(' llamada ajaxa para borrar un pedido ');

    this.pedidoService.delete(this.id).subscribe(
       (res:string) => {console.log('borrado' + res);
               this.entregaRealizada.emit(this.id);
              },
       error => console.log('error ' + error.message)
    );
  }

}
