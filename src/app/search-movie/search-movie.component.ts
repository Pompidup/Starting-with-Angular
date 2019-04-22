import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from "@angular/forms";
import { required } from "./required";
import { dateValidator } from "./date.validator";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  public minDate: number = 1900;
  public maxDate:number = 2019;

  filmForm = this.fb.group({
    FilmIdOrTitle: this.fb.group({
      Identifiant: [""],
      Titre: [""]
    },
      { validators: required("Titre", "Identifiant") }
    ),
    Type: ["serie"],
    AnneeDeSortie: ["", dateValidator(this.minDate, this.maxDate)],
    Fiche: [""]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.filmForm.valueChanges.subscribe(
      value => {
        console.log("filmForm value changes : ", value);
      }
    );
    this.initFiche();

  }

  // Init Type and Fiche
  initFiche() {
    this.filmForm.patchValue({
      Fiche: "courte"
    });

  }

  onSubmit() {
    // Get form value as JSON object
    console.log("filmForm submitted : ", this.filmForm.value);
  }

}
