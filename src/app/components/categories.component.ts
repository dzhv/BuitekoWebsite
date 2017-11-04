import { Component, OnInit, Input, NgZone } from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: '../templates/categories.html',
  	styleUrls: ['../styles/categories.css', '../styles/bootstrap/css/bootstrap.css' ]
})

export class CategoriesComponent implements OnInit {
    public title: string;

    constructor(
    ) { 
        this.title = '';              
    }
    
    ngOnInit(): void {
        document.body.classList.remove('gallery-bg');   // hooray for hacks
        document.body.classList.add('category-bg');
    }
}
