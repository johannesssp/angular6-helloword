import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-test-jo-belajar'
  @ViewChild('pass1') pass1: ElementRef;
  @ViewChild('pass2') pass2: ElementRef;
  @ViewChild('result') result: ElementRef;
  @ViewChild('show1') show1: ElementRef;
  @ViewChild('show2') show2: ElementRef;
  
  @ViewChild('user') user: ElementRef;
  @ViewChild('file') file: ElementRef;
  @ViewChild('btnSubmit') btnSubmit: ElementRef;
  
  selectedRadio: string = "";
  item: Array<any> = [
  {
            "field": "ktp",
            "mandatory": true,
            "editable": false
        },
        {
            "field": "npwp",
            "mandatory": false,
            "editable": true
        },
        {
            "field": "full_name",
            "mandatory": false,
            "editable": false
        },
        {
            "field": "mother_maiden_name",
            "mandatory": false,
            "editable": false
        },
        {
            "field": "living_address",
            "mandatory": false,
            "editable": false
        },
        {
            "field": "city_identity",
            "mandatory": false,
            "editable": false
        },
        {
            "field": "province_identity",
            "mandatory": false,
            "editable": false
        },
        {
            "field": "signature",
            "mandatory": false,
            "editable": false
        },
        {
            "field": "occupation",
            "mandatory": false,
            "editable": false
        },
        {
            "field": "position",
            "mandatory": false,
            "editable": false
        },
        {
            "field": "company_field",
            "mandatory": false,
            "editable": false
        },
        {
            "field": "photo",
            "mandatory": false,
            "editable": false
        }
];
	showUpdatedItem(newItem:string, type:string, set:boolean) {
		
		let index = this.item.findIndex( data => data.field === newItem );

		console.log(set); 
		if(type === "1") {
			this.item[index].mandatory = set;
		} else if (type === "2"){
			this.item[index].editable = set;
		}
		console.log(this.item[index]); //jika mau ambil nilai satuan
	}
	onSubmit(){

		console.log(this.item); // jika mau ambil nilai keseluruhan
	}
  onKey(){
	  const newPass = this.pass1.nativeElement.value;
	  const confirmPass = this.pass2.nativeElement.value;
	  
	  if ( newPass == confirmPass ) {
		  this.result.nativeElement.innerHTML = 'Password match';
	  } else {
		  this.result.nativeElement.innerHTML = 'Password do not match';
	  }
  }
  
  onShowPass1(id: string){
	  if ( id === '1') {
		  if ( this.pass1.nativeElement.attributes.type.value === 'password' ) {
			  this.pass1.nativeElement.attributes.type.value = 'text';
		  } else { 
			  this.pass1.nativeElement.attributes.type.value = 'password';
		  }
	  } else {
		  if ( this.pass2.nativeElement.attributes.type.value === 'password' ) {
			  this.pass2.nativeElement.attributes.type.value = 'text';
		  } else { 
			  this.pass2.nativeElement.attributes.type.value = 'password';
		  }
	  }
  }
  
  onDetectVal(){
	  const userVal = this.user.nativeElement.value;
	  const fileVal = this.file.nativeElement.value;
	  
	  if ( userVal === "" || fileVal === "" || this.selectedRadio === ""){
		  this.btnSubmit.nativeElement.attributes.type.value = 'button';
	  } else {
		  this.btnSubmit.nativeElement.attributes.type.value = 'submit';
	  }
  }
  onChangeRadio(val: string){
	  this.selectedRadio = val;
	  this.onDetectVal();
		  console.log(this.selectedRadio);
  }
  onSubmitForm(){
	  const userVal = this.user.nativeElement.value;
	  const fileVal = this.file.nativeElement.value;
	  
	  if ( userVal === "" || fileVal === "" || this.selectedRadio === ""){
		  console.log("Isi dulu yang lain");
	  } else {
		  console.log("Udah ke isi semua");
	  }
  }
	
}