/// <reference path="../scripts/libs/jquery.d.ts" />
import { Component, OnInit, Input, NgZone } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: '../templates/categories.html',
  	styleUrls: ['../styles/categories.css', '../styles/bootstrap/css/bootstrap.css' ]
})

export class CategoriesComponent implements OnInit {
    public title: string;
    private init: boolean;

    constructor(
    ) { 
        this.title = ''; 
        this.init = false;             
    }
    
    ngOnInit(): void {
        document.body.classList.remove('gallery-bg');   // hooray for hacks
        document.body.classList.add('category-bg');

        if (!this.init)
            $(document).ready(function() {
                (<any>$('#fullpage')).fullpage();
            });

        this.init = true;
    }

    ngOnDestroy() {         
        (<any>$('#fullpage')).fullpage.destroy('all');
    }
}
