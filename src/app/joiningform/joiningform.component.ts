import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';

import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-joiningform',
  templateUrl: './joiningform.component.html',
  styleUrls: ['./joiningform.component.css']
})
export class JoiningformComponent implements OnInit {

  personal_opened = true;
  education_opened = false;
  experience_opened = false;
  // title = 'Hello Panel';
  // body = 'this is the content';

  // urls = [];
  // onSelectFile(event) {
  //   if (event.target.files && event.target.files[0]) {
  //       var filesAmount = event.target.files.length;
  //       for (let i = 0; i < filesAmount; i++) {
  //               var reader = new FileReader();

  //               reader.onload = (event) => {
  //                 console.log(event.target.result);
  //                  this.urls.push(event.target.result); 
  //               }

  //               reader.readAsDataURL(event.target.files[i]);
  //       }
  //   }
  // }
  
  arrayInputs = [{controlerInputName1 : ['',Validators.required]}, {controlerInputName1: ''}];

  formName =this.fb.group({
    controllerArray: this.fb.array([])
  })  

  constructor(private fb: FormBuilder) { }

  setArrayInputs(arrayInputs) {
    const arrayFG = arrayInputs.map(address => this.fb.group(address));
    const formArray = this.fb.array(arrayFG);
    this.formName.setControl('controllerArray', formArray);
  }

  ngOnInit() { this.setArrayInputs(this.arrayInputs) }

  addInput() {(this.formName.get('controllerArray') as FormArray).push(this.fb.group({controlerInputName1:''})) }

  removeInput(index) { this.formName.controls.controllerArray["controls"].splice(index,1) }
}

