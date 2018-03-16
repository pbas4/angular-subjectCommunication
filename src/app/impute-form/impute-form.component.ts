import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-impute-form',
  templateUrl: './impute-form.component.html',
  styleUrls: ['./impute-form.component.scss']
})
export class ImputeFormComponent implements OnChanges {

  @Input('data')
  public data;

  imputeForm: FormGroup;

  inputsData: any;

  constructor(private fb: FormBuilder, private ns: NotificationService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.imputeForm = this.fb.group({
      dayOne: this.data.dayOne,
      dayTwo: this.data.dayTwo
    });
  }

  sendInputs() {
    this.inputsData = {
      id: this.data.id,
      dayOne: this.imputeForm.get('dayOne').value,
      dayTwo: this.imputeForm.get('dayTwo').value
    };

    this.ns.emitInputs(this.inputsData);
  }

}
