import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../shared/apicall.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

   signInForm! : FormGroup;
   journey :any;
   data:any
   constructor(private formBuilder:FormBuilder, private apicallService: ApicallService){

   }
  ngOnInit(){
   this.journey = this.apicallService.journey; //user/owner/admin
   this.getData()
    this.formDetails()
  }

    formDetails(){
      this.signInForm = this.formBuilder.group({
        userName:['',[Validators.required]],
        password:[]
      })
    }

    submit(){

    }

    getData(){  //get api call u/a/o
      this.apicallService.getApiCall(this.journey).subscribe(respo=>{
        this.data = respo;
        console.log('this.data ',this.data );
      })
   
      
    }
}
