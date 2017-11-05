import { Component, OnInit, Input, NgZone, AfterViewInit } from '@angular/core';
import { GalleryButton } from '../scripts/galleryButton';
import { initDragging } from '../scripts/draggingSetup';

@Component({
	selector: 'app-root',
	templateUrl: '../templates/home.html',
  	styleUrls: ['../styles/home.css']
})

export class HomeComponent implements OnInit {
    public title: string;
    public galleryButton: GalleryButton;

    constructor(
    ) { 
        this.title = 'Home';              
    }
    
    ngOnInit(): void {        
        this.galleryButton = new GalleryButton('gallery-button', 'home-container', 'home-image');
        initDragging(Array.prototype.slice.call(document.getElementsByClassName('draggable-object')));
    }    
}
