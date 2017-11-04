import { Component, OnInit, Input, NgZone } from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: '../templates/categories.html',
  	styleUrls: ['../styles/categories.css']
})

export class CategoriesComponent implements OnInit {
    public title: string;

    constructor(
    ) { 
        this.title = 'Kategorijos, seni';              
    }
    
    ngOnInit(): void {
        document.body.style.backgroundImage = "url('assets/images/akvariumas.JPG')";
    }
}
