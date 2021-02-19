import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { post } from 'src/app/post.interface';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  fecha: Date;
  formulario: FormGroup;
 
  constructor() { 
    
    this.fecha = new Date();

    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      imagen: new FormControl(),
      autor: new FormControl(),
      categoria: new FormControl(),
      fecha: new FormControl()
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.fecha = new Date()
    console.log(this.fecha)
    console.log(this.formulario.value)
  }

}
