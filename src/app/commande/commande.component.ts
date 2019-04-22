import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { minDateValidator } from './minDateValidator';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent {
  // Declare all controls with validation rules
  orderForm = this.fb.group({
    title: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.max(5)]],
    date: ['', Validators.required],
    contact: ['', [Validators.required, Validators.email]],
    payments: this.fb.array([])
  });

  addPayment() {
    // create FormGroup with two FormControl
    const paymentForm = this.fb.group({
      // add min date validator
      date: ['', [Validators.required, minDateValidator(new Date())]],
      amount: ['', Validators.required]
    });
    // parse abstract control to FormArray
    const payments = this.orderForm.get('payments') as FormArray;
    // add new FormGroup to control 'payments'
    payments.push(paymentForm);
  }
  get payments(): FormArray {
    // convert abstract control to FormArray
    return this.orderForm.get('payments') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // Get form value as JSON object
    console.log('orderForm submitted : ', this.orderForm.value);
  }

  ngOnInit() {
    // get Observable from FormGroup
    this.orderForm.valueChanges
      // listen to value change
      .subscribe(value => {
        console.log('orderForm value changes : ', value);
      });

  }

}

