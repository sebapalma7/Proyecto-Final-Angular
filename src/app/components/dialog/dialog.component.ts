import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  formAlumno:FormGroup = this.fb.group(
    {
      nombre:[null,Validators.required],
      apellido:[null,Validators.required],
      dni:[null,Validators.required],
      turno:[null,Validators.required]
    }
  )

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private fb:FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  guardar() {
    this.dialogRef.close(this.formAlumno.value)
  }

}
