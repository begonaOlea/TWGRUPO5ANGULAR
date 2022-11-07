import { Component, OnInit } from '@angular/core';
import { Pedido } from '../model/pedido';
import { LogService } from '../servicios/log.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {

  pedidos: Pedido[] = [];

  estadoListadoPedidos: String = 'entregado';

  //INJECTA UNA INSTANCIA DE LOGSERVICE
  constructor(private log: LogService) {

    this.pedidos = [
      {
        id: 1,
        user: "luis",
        desc: "pizza",
        fechaPedido: new Date(),
        entregado: false
      },
      {
        id: 2,
        user: "luis",
        desc: "Moto",
        fechaPedido: new Date(),
        entregado: true
      },
      {
        id: 3,
        user: "Maite",
        desc: "Camisa",
        fechaPedido: new Date(),
        entregado: false
      }
    ];


  }

  ngOnInit(): void {

    console.log("............");
    var a: any = 1;
    var b: any = '1';

    console.log("a == b: " + (a == b));
    console.log("a === b: " + (a === b));

  }

  public onAltaPedido(): void {
    //console.log('abrir formulari edicion pedido');
    this.log.info("Abrir formulario alta nuevo pedido");
  }

}
