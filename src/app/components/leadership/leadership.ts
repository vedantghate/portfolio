import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { LEADERSHIP } from '../../constants/profile.constants';

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './leadership.html',
  styleUrls: ['./leadership.css']
})

export class LeadershipComponent {
  leadershipList = LEADERSHIP;
}