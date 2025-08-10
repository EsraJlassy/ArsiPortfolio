import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';
import { isObservable, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  email = 'jlassyesra6@gmail.com';
  // Replace with your real phone; display-friendly for UI, sanitized for tel: href
  phone = '+216 50 691 976';

  submitted = false;
  pending = false;
  success = false;
  errorMsg: string | null = null;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  get telHref(): string {
    const cleaned = this.phone.replace(/[^+0-9]/g, '');
    return `tel:${cleaned}`;
  }

  async submit() {
    this.submitted = true;
    this.errorMsg = null;

    if (this.pending) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.pending = true;
    this.success = false;

    const formData = this.form.getRawValue() as {
      name: string;
      email: string;
      message: string;
    };

    try {
      // result may be: void | Promise<any> | Observable<any>
      const result = this.contactService.sendMessage(formData) as unknown;

      if (isObservable(result)) {
        await firstValueFrom(result as any);
      } else {
        // Handles Promise or void (resolves immediately for void/sync)
        await Promise.resolve(result);
      }

      this.success = true;
      this.form.reset();
      this.submitted = false;
    } catch (e) {
      this.errorMsg = 'Something went wrong. Please try again.';
    } finally {
      this.pending = false;
    }
  }
}
