import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { CloudinaryConfig } from './cloudinaryConfig';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FileService{
	constructor(private http: Http) { }

	uploadFile = (file) => {
		// let formData:FormData = new FormData();
  //       formData.append('uploadFile', file, file.name);
  //       let headers = new Headers();
  //       /** No need to include Content-Type in Angular 4 */
  //       //headers.append('Content-Type', 'multipart/form-data');
  //       headers.append('Accept', 'application/json');        
        
  //       this.http.post(`${CloudinaryConfig.url}`, formData, { headers: headers })
  //       	.toPromise()
  //           .then(res => res.json())
  //           //.catch(error => Observable.throw(error));
	}
}
