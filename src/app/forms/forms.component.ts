import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  form !: FormGroup;
  listCountry: string[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listCountry = this.route.snapshot.data['listCountry'];
    this.form = this.initForms();
//    this.onInitForms();
  }

  onInitForms() {
    this.form.patchValue({
      name: 'Wisthong',
      age: "2015-02-10",
      description: 'XXX XX X\nHello word!'
    })
  }

  initForms(): FormGroup{
    return this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      age: ['',[Validators.required]],
      description: ['',[Validators.required,Validators.minLength(5)]],
      country: ['',[Validators.required]]
    });
  }


  enviar(form: FormGroup){
    console.log(form.value);
  }

}
