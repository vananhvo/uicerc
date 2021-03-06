import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, Validators, NgForm } from '@angular/forms';
import { DefaultService } from 'src/app/default.service';



@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  name: string;
  result;
  
  //-- Passing Project Name --
  pName: string;

  constructor(private defaultService: DefaultService) { }

  ngOnInit(): void {
  }

  submitBtn() {
    this.defaultService.setNewProjectName({
      pName: this.pName
    });
  }

  submitProjectName(projectName: NgForm) {

    let formData = new FormData();
    formData.append('projectName', projectName.value.projectName);

    this.defaultService.createProject(formData).subscribe(value => {
      this.result = value;
    });
    console.log(this.result);

  }
}
