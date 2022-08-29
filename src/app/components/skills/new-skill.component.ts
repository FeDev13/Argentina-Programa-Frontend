import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/service/s-skills.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css'],
  imports:[FormsModule],
  standalone: true
})
export class NewSkillComponent implements OnInit {

  nombreS: string = '';
  descripcionS: string = '';

  constructor(private sSkills: SSkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skills = new Skills(this.nombreS, this.descripcionS);
    this.sSkills.save(skills).subscribe(
      data => {
        alert("Skill añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
