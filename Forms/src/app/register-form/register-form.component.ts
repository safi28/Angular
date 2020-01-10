import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
  phoneNumber: Array<string> = ["+359", "721", "123"];
  jobTitle: Array<string> = ["Designer", "Manager", "Programmer"];
  @ViewChild("form", { static: false })
  htmlForm: NgForm;
  model = {};
  constructor() {}

  ngOnInit() {}

  register(formData) {
    console.log(formData);
    
  }
}
