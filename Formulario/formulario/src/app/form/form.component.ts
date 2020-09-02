import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup

  constructor() {
    this.formulario = new FormGroup ({
      code: new FormControl( '', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]{3}[0-9]{3}$/)
      ])
    })
   }

   onSubmit(){
    console.log(this.formulario.value)
    alert("El código ha sido enviado")
  }

  ngOnInit(): void {
  }

}
