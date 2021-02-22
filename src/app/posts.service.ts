import { Injectable } from '@angular/core';
import { post } from './post.interface';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 


export class PostsService {

  listaPosts: post[];

  constructor() { 
    this.listaPosts = [
      {titulo: 'hola',
      texto: 'lorem impsu, que tal lorem impsu, que tal lorem impsu, que tal lorem impsu, que tal lorem impsu, que tal',
      autor: 'yo mismo',
      imagen: 'https://i.pinimg.com/736x/c3/8f/c7/c38fc74a67cf024cc0e07bef37c9baa5.jpg',
      fecha: '10/10/10',
      categoria: 'deporte'}
    ]
  }

  add(nuevoPost: post) {
    return new Promise((resolve,resject)=>{
      this.listaPosts.push(nuevoPost);
      resolve(this.listaPosts);
    })
  }

  getAll(): Promise<post[]> {
    return new Promise((resolve,reject)=>{
      resolve(this.listaPosts)
    })
  }

}
