import { Component } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})


export class SearchMovieComponent {
  movieForm = this.formBuilder.group({
    movieIdTitle: this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required]
    }),
    annee: ['', Validators.required],

  })
  form: FormGroup;
  orders = [
    { id: 100, name: 'Film' },
    { id: 200, name: 'Serie' },
    { id: 300, name: 'Episode' }
  ];






  isRequiredValidator(param_a: number, param_b: string) {

  };

  rangeDateValidator(param_a: number, param_b: number) {
    const dateMin = 1900;
    const dateMax = 2019;

  };

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });
    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.orders.map((o, i) => {
      const control = new FormControl(i === 1); // if first item set to true, else false
      (this.form.controls.orders as FormArray).push(control);
    });
  }
  submit() {
  }

}



