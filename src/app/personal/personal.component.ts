import { Component } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
data:any =[
  {
  nombre:"Juan",
  profesion: "médico",
  edad: 34
},
{
nombre:"Ana",
profesion:"Enfermera",
edad:28
}
]
}


