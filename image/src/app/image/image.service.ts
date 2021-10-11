import { Injectable, OnInit } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ImageService  {
    imageArray:any[]=[{
        url:'assets/html.jpg'
      },
      {
        url:'assets/css.jpg'
      },
      {
        url:'assets/bootstrap.png'
      },
      {
        url:'assets/javascript.png'
      },
      {
        url:'assets/typescript.jpg'
      },
      {
        url:'assets/angular.png'
      }
    
    ];
    constructor() { }

    

    clickItem(item:String):Number{
       return this.imageArray.indexOf((item),0);  
    }

    deleteItem(item:String){
        this.imageArray.splice(this.imageArray.indexOf(item),1);
    }

    
    
}