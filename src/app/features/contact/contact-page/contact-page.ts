import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string; // Spam protection
}

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ContactPageComponent {
  formData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError: string | null = null;

  onSubmit(): void {
    if (this.isSubmitting) return;

    // Spam protection check: if honeypot is filled, abort silently
    if (this.formData.honeypot && this.formData.honeypot.trim().length > 0) {
      this.submitSuccess = true;
      return;
    }

    // Client-side validation
    if (!this.formData.name.trim() || !this.formData.email.trim() || !this.formData.subject.trim() || !this.formData.message.trim()) {
      this.submitError = 'Please fill out all required fields before submitting.';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email.trim())) {
      this.submitError = 'Please enter a valid email address.';
      return;
    }

    if (this.formData.message.trim().length < 10) {
      this.submitError = 'Message must be at least 10 characters long.';
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = null;

    try {
      const mailtoLink = `mailto:prabanjansakthibabu@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${this.formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Prabanjan,\n\n${this.formData.message}\n\nBest regards,\n${this.formData.name}\nEmail: ${this.formData.email}`
      )}`;

      // Trigger client email application
      window.location.href = mailtoLink;

      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;

        setTimeout(() => {
          this.formData = {
            name: '',
            email: '',
            subject: '',
            message: '',
            honeypot: ''
          };
          this.submitSuccess = false;
        }, 5000);
      }, 800);
    } catch (err) {
      this.isSubmitting = false;
      this.submitError = 'An error occurred while opening your email client. Please reach out directly to prabanjansakthibabu@gmail.com.';
    }
  }
}
