import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import 'rxjs/add/operator/toPromise';
import { Cloudinary } from '@cloudinary/angular-4.x';
import { Observable } from 'rxjs/Rx';

import { PhotoUploader } from './scripts/photoUploader';
import { PhotoService } from './scripts/photoService';
import { Photo } from './scripts/photo';

@Component({
  selector: 'app-root',
  templateUrl: './templates/app.component.html',
  styleUrls: ['./styles/app.component.css']
})

export class AppComponent implements OnInit {
    private title: string; 
    private subtitle: string;
    private photos: Observable<Photo[]>;
//    private uploader: FileUploader;

    constructor(
    private cloudinary: Cloudinary,
    private zone: NgZone,
    private http: Http,
    private photoService: PhotoService,
    private photoUploader: PhotoUploader
    ) { 
        this.title = 'Jidrėni-fėni';
        this.subtitle = 'Hellooo-ooo';        
    }
    
    ngOnInit(): void {

    }

    getPhotos = () => {
        this.photos = this.photoService.getPhotos();
    }
}
