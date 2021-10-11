import { ImageService } from './image.service';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {


  imgDefault:any="assets/all.jpg";
  images:any;
  
 
  constructor(private imgService:ImageService) { 
    this.images=this.imgService.imageArray;
  }

  imageClick(item:String){
     this.imgDefault=this.imgService.clickItem(item);
     this.imgDefault = this.images[this.imgDefault].url;
  } 

  delete(item:String){
    this.imgService.deleteItem(item);
    if(typeof this.images !== 'undefined' && this.images.length > 0){
    this.imgDefault = this.images[0].url;
  }
}

  ngOnInit() {
    if(typeof this.images !== 'undefined' && this.images.length > 0){
    this.imgDefault = this.images[0].url;
  }
  }

}