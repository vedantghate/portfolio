import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ExperienceComponent } from './components/experience/experience';
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';
import { EducationComponent } from './components/education/education';
import { LeadershipComponent } from './components/leadership/leadership';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    LeadershipComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  constructor(private translate: TranslateService) {
    translate.setFallbackLang('en');
    translate.use('en');
  }
}