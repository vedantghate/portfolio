import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { SKILLS } from '../../constants/profile.constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {
  skillCategories = SKILLS;
}