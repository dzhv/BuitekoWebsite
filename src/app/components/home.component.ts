import { Component, OnInit, Input, NgZone, AfterViewInit } from '@angular/core';

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
        var homeImage = document.getElementById('home-image');
        this.galleryButton = new GalleryButton('gallery-button', 'home-container', homeImage);
    }    
}


class GalleryButton {
    button: HTMLElement;
    homeImage: HTMLElement;
    homeContainer: HTMLElement;
    left: number;
    top: number;

    constructor(buttonId: string, homeContainerId: string, homeImage: HTMLElement){
        this.homeImage = homeImage;        
        this.top = 0;
        this.left = 0;
        this.homeContainer = document.getElementById(homeContainerId);
        this.button = document.getElementById(buttonId);
        this.homeImage.addEventListener('load', () => {
            this.calculatePosition();
        });
    }

    calculatePosition = () => {        
        var imgWidth = this.homeImage.offsetWidth;
        var containerWidth = this.homeContainer.offsetWidth;
        var margin = (containerWidth - imgWidth) / 2;

        this.button.style.left = (imgWidth * 12.3 / 22 - 10 + margin).toString() + "px";
        this.button.style.top = "40px";
        this.button.style.width = (225 * containerWidth / 1900).toString() + "px";
    }
}
