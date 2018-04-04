import { Component, OnInit } from '@angular/core';
import {proyectos} from './../../../src/data/proyectos.json';
import {mywork} from './../../../src/data/mywork.json';

@Component({
  selector: 'app-foreman',
  templateUrl: './foreman.component.html',
  styleUrls: ['./foreman.component.css']
})
export class ForemanComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $('.table1, .table2').hide();

      $('.btn1').click(function(){
        boton1();
      });

      $('.btn2').click(function(){
        boton2();
      });

      function boton1 (){
        $('.table1').show();
        console.log(proyectos);        
        for(let i=0; i<proyectos.length; i++){
          let data = proyectos[i];
          $('.tbody1').append(`
          <tr>
          <td>${data.id}</td>
          <td>${data.nombre}</td>
          <td>${data.disponibilidad}</td>
          <td>${data.ciudad}</td>
          <td>${data.direccion}</td>
          <td>${data.descripcion}</td>
          </tr>
        `);

        }
        
      }

      function boton2(){
        $('.table1').hide();
        $('.table2').show();
        console.log(mywork);        
        for(let i=0; i<mywork.length; i++){
          let data = mywork[i];
          $('.tbody2').append(`
          <tr>
          <td>${data.id}</td>
          <td>${data.nombre}</td>
          <td>${data.disponibilidad}</td>
          <td>${data.ciudad}</td>
          <td>${data.direccion}</td>
          <td>${data.descripcion}</td>
          </tr>
        `);
        }
      }
    })

  }
}