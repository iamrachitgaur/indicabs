import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookCabsForm:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  bookCabs(){
    console.log(this.bookCabsForm.value)
  }

  ngOnInit(): void {
    this.bookCabsForm = this.formBuilder.group({
      pickUpAddress:[null,[Validators.required]],
      dropOffAddress:[null,[Validators.required]],
      Passengers:[null,[Validators.required]],
      price:[null,[Validators.required]],
      date:[null,[Validators.required]],
      time:[null,[Validators.required]]
    })
  }

}
