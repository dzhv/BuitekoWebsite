import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

import { PhotoService } from '../scripts/photoService';
import { PhotoUploader } from '../scripts/photoUploader';
import { Photo } from '../scripts/photo';

@Component({
	selector: 'app-root',
	templateUrl: '../templates/gallery.html',
  	styleUrls: ['../styles/gallery.css', '../styles/bootstrap/css/bootstrap.css' ]
})

export class GalleryComponent implements OnInit {
    public title: string;
    public photos: Observable<Photo[]>;    

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private photoService: PhotoService,
        public photoUploader: PhotoUploader
    ) { 
        this.title = 'Jidrėni-fėni';
    }
    
    ngOnInit(): void {
        document.body.classList.remove('category-bg');
        document.body.classList.add('gallery-bg');

        this.route.params.subscribe(params => {
            var album = params['categoryId'];

            this.photoUploader.setAlbum(album);
            this.photoService.setAlbum(album);

            return this.getPhotos();
        })
    }

    getPhotos = () => {
        this.photos = this.photoService.getPhotos();
        return this.photos;
    }     
}
