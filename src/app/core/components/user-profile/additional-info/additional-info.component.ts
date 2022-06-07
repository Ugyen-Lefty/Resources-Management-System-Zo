import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent implements OnInit {

  @Output() isAdditional = new EventEmitter<any>();
  bankList: string[] = ['Bank of Bhutan', 'Bhutan National Bank', 'Druk PNB', 'Tashi Bank'];
  additionalForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.additionalForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      roles: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  cancel() {
    this.additionalForm.reset();
    this.isAdditional.emit(false);
  }

  editAdditional() {
    
  }

}
