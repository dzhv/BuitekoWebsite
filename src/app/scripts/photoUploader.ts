import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Cloudinary } from '@cloudinary/angular-4.x';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhotoUploader {

  public photoTitle: string;
  public uploader: FileUploader;
  private albumTitle: string;
  public uploadComplete: boolean;
  private uploadCallback: Function;
  
	constructor(
    private http: Http,
    private cloudinary: Cloudinary
  ) {
    this.photoTitle = '';
    this.init();
    this.albumTitle = '';
    this.uploadComplete = false;
  }

  init = () => {
    // Create the file uploader, wire it to upload to your account
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
      // Upload files automatically upon addition to upload queue
      autoUpload: true,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      // Calculate progress independently for each uploaded file
      removeAfterUpload: true,
      // XHR request headers
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };
    this.uploader = new FileUploader(uploaderOptions);

    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
        // Add Cloudinary's unsigned upload preset to the upload form
        form.append('upload_preset', this.cloudinary.config().upload_preset);
        // Add built-in and custom tags for displaying the uploaded photo in the list
        let tags = this.albumTitle;
        if (this.photoTitle) {
        form.append('context', `photo=${this.photoTitle}`);
        tags = `${this.albumTitle},${this.photoTitle}`;
        }
        form.append('tags', tags);
        form.append('file', fileItem);

        // Use default "withCredentials" value for CORS requests
        fileItem.withCredentials = false;
        return { fileItem, form };
    };

    this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) => {
      this.uploadComplete = true;
      if (this.uploadCallback){
        this.uploadCallback();
      }
      setTimeout(() => {
        this.uploadComplete = false;
      }, 4000);
    }
  }

    updateTitle(value: string) {
        this.photoTitle = value;
    }

    setAlbum = (albumTitle: string) => {
        this.albumTitle = albumTitle;
    }

    setUploadCallback = (callback: Function) => {
        this.uploadCallback = callback;
    }
}
