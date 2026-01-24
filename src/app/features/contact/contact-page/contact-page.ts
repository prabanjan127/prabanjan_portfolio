import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.css']
})
export class ContactPageComponent {
  formData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError: string | null = null;

  onSubmit(): void {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = null;

    // Simulate form submission (in a real app, you'd send to a backend)
    // For now, we'll create a mailto link
    const mailtoLink = `mailto:prabanjansakthibabu@gmail.com?subject=${encodeURIComponent(this.formData.subject)}&body=${encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\n${this.formData.message}`
    )}`;

    window.location.href = mailtoLink;

    // Show success message
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;

      // Reset form after 3 seconds
      setTimeout(() => {
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        this.submitSuccess = false;
      }, 3000);
    }, 1000);
  }
}
