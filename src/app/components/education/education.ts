import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { TimelineItemComponent } from '../timeline-item/timeline-item';
import { EDUCATION } from '../../constants/profile.constants';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TimelineItemComponent],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class EducationComponent {
  educationList = EDUCATION;
}