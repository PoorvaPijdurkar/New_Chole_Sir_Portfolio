import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { QuoteModalService } from 'app/layouts/navbar/quote-Model.service';

@Component({
  selector: 'jhi-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isSaving = false;
  showThankYouMessage = false;
  editForm = new FormGroup({
    name: new FormControl(null, {
      validators: [Validators.required, Validators.maxLength(50)],
    }),
    contactNumber: new FormControl(null, {
      validators: [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ],
    }),
    email: new FormControl(null, {
      validators: [Validators.required, Validators.email],
    }),
    message: new FormControl(null, {
      validators: [Validators.required, Validators.maxLength(100)],
    }),
  });

  constructor(
    public router: Router,
    private quoteModalService: QuoteModalService
  ) { }

  onSubmit():void {
    this.isSaving = true;
    const formDetails = this.editForm.getRawValue();
    this.quoteModalService.modelQuote(formDetails).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  private onSaveSuccess(): void {
    this.editForm.reset();
    this.showThankYouMessage = true;
    setTimeout(() => {
      this.showThankYouMessage = false;
    }, 5000);
  }

  private onSaveError(): void {
    this.isSaving = false;
  }


}
