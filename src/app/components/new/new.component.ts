import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {


  formulario: FormGroup;
  
  fecha: Date;
  
 
  
  constructor(private postService: PostsService) 
    { 
    
      // {{ fechaActual | date:'dd/MM/yyyy HH:mm.ss' }}

    this.fecha = new Date;

    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      imagen: new FormControl(),
      autor: new FormControl(),
      categoria: new FormControl(),
      fecha: new FormControl(this.fecha)
    })
  }

  ngOnInit(): void {
   
  }

  async onSubmit() {
    const nuevoArr = await this.postService.add(this.formulario.value);
    this.formulario.reset();
    

  }

}
