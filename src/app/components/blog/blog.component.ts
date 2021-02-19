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
  constructor(
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.postService.getAll()
    .then(listaPublica => {
      this.lista = listaPublica
    })

  
  }

}
