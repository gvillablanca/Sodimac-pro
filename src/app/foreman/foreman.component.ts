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
  Maestros = [
   {
     nombre: "Raul Cortez",
     ciudad: "Santiago",
     categoria: "Jardineria",
     disponibilidad: "true"
   },
   {
     nombre: "Edwart Elric",
     ciudad: "Santiago",
     categoria: "Construcción",
     disponibilidad: "true"
   },
   {
     nombre: "Marcos Ruiz",
     ciudad: "Santiago",
     categoria: "Jardineria",
     disponibilidad: "true"
   },
   {
     nombre: "Raul Cortez",
     ciudad: "Santiago",
     categoria: "Terraza",
     disponibilidad: "true"
   }
 ]

 
   proyectos = [
     {
       id: "1",
       nombre : "proyecto terraza",
       descripcion : "construcción de una terraza para un jardin",
       disponibilidad : "ocupado",
       direccion : "av siempre viva 1234",
       ciudad : "santiago"
     },
     {
       id: "2",
       nombre : "proyecto cocina",
       descripcion : "reconstruccion de cocina en un departamento",
       disponibilidad : "disponible",
       direccion : "av siempre viva 1234",
       ciudad : "talca"
     },
     {
       id: "3",
       nombre : "proyecto terraza",
       descripcion : "construcción de una terraza para un jardin",
       disponibilidad : "ocupado",
       direccion : "av italia 1234",
       ciudad : "coquimbo"
     },
     {
       id: "4",
       nombre : "proyecto dormitorio",
       descripcion : "construcción de un dormitorio en un segundo piso",
       disponibilidad : "disponible",
       direccion : "av siempre viva 1234",
       ciudad : "coquimbo"
     },
     {
       id: "5",
       nombre : "proyecto terraza",
       descripcion : "construcción de una terraza para un jardin",
       disponibilidad : "disponible",
       direccion : "av siempre viva 1234",
       ciudad : "coquimbo"
     }
   ]

   mywork= [
     {
       id: "1",
       nombre : "proyecto terraza",
       descripcion : "construcción de una terraza para un jardin",
       disponibilidad : "en proceso",
       direccion : "av lo que sea 1234",
       ciudad : "santiago"
     },
     {
       id: "5",
       nombre : "proyecto jardineria",
       descripcion : "redecoracion de jardin trasero de una parcela",
       disponibilidad : "acabado",
       direccion : "oscarito 2134",
       ciudad : "coquimbo"
     }
   ]

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
        $('.table2').hide();
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