import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItem } from '../../models/profile.model';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-item.html',
  styleUrls: ['./timeline-item.css']
})
export class TimelineItemComponent {
  @Input({ required: true }) item!: TimelineItem;
}