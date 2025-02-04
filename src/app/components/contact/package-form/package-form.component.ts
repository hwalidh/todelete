import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PackageConfig } from '../../../models/package.model';

@Component({
  selector: 'app-package-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.scss']
})
export class PackageFormComponent implements OnInit {
  @Input() config!: PackageConfig;
  @Input() form!: FormGroup;

  ngOnInit() {
    if (!this.config || !this.form) {
      throw new Error('PackageFormComponent requires config and form inputs');
    }
  }
}