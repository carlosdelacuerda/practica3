import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/post.interface';
import { PostsService } from 'src/app/posts.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {



  lista: post[];
  politica: post[];
  deporte: post[];
  sociedad: post[];
  // seleccion: string;

  

  constructor(
    private postService: PostsService
  ) {
    
   }

  ngOnInit(): void {
    this.postService.getAll()
    .then(listaPublica => {
      this.lista = listaPublica
      this.politica = listaPublica.filter(lista => lista.categoria === 'politica')
      this.deporte = listaPublica.filter(lista => lista.categoria === 'deporte')
      this.sociedad = listaPublica.filter(lista => lista.categoria === 'sociedad')

    });
    
  }
  change() {
    let seleccion = document.querySelector('select')
    let valor = seleccion.value;
    if (valor === 'todas') {
      this.lista = this.lista;
    } else if (valor ==='politica') {
      this.lista = this.politica;
    } else if (valor ==='deporte') {
      this.lista = this.deporte;
    } else if (valor ==='sociedad') {
      this.lista = this.sociedad;
    }
  };
  
}


