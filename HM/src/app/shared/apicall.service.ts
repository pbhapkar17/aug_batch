import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  
   name='poonam';
  journey: any;
   constructor( private   httpClient :   HttpClient){}

   postApiCall(){
    //this.httpClient.post()
   }
}
