import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { TimelineItemComponent } from '../timeline-item/timeline-item';
import { Experience } from '../../models/profile.model';
import { EXPERIENCES } from '../../constants/profile.constants';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TimelineItemComponent],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent {
  experiences: Experience[] = [];

  ngOnInit() {
    // Use structuredClone (or JSON parse/stringify) to create a deep copy of the constant.
    // This prevents UI state changes (like flipping) from mutating the original constant file.
    this.experiences = structuredClone(EXPERIENCES);
  }

  toggleFlip(index: number) {
    this.experiences[index].isFlipped = !this.experiences[index].isFlipped;
  }
}

