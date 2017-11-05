import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

import { PhotoService } from '../scripts/photoService';
import { PhotoUploader } from '../scripts/photoUploader';
import { Photo } from '../scripts/photo';
import { Cloudinary } from '@cloudinary/angular-4.x';

@Component({
	selector: 'app-root',
	templateUrl: '../templates/gallery.html',
  	styleUrls: ['../styles/gallery.css', '../styles/bootstrap/css/bootstrap.css' ]
})

export class GalleryComponent implements OnInit {
    public title: string;
    public photos: Observable<Photo[]>;
    public modalPhotoUrl: string;    

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private photoService: PhotoService,
        public photoUploader: PhotoUploader,
        private cloudinary: Cloudinary
    ) { 
        this.title = 'Jidrėni-fėni';
        this.modalPhotoUrl = '';
    }
    
    ngOnInit(): void {
        document.body.classList.remove('category-bg');    // isn't this something, right?
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

    openModal = (photoId: string) => {
        //this.modalPhotoUrl = this.cloudinary.url(photoId);

        this.modalPhotoUrl = `http://res.cloudinary.com/${this.cloudinary.config().cloud_name}` 
            + `/image/upload/c_fit,h_600,w_800/${photoId}`;

        (<any>$('#photoModal')).modal();
    }
}
