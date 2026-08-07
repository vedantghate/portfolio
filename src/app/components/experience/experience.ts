import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { TimelineItemComponent } from '../timeline-item/timeline-item';
import { EXPERIENCES } from '../../constants/profile.constants';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TimelineItemComponent],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent {
  experiences = EXPERIENCES;
}