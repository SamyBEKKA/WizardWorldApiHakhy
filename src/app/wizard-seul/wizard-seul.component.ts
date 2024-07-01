import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { WizardWorldApiService } from '../wizard-world-api.service';
import { ActivatedRoute } from '@angular/router';
import { Wizards } from '../entities';

@Component({
  selector: 'app-wizard-seul',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './wizard-seul.component.html',
  styleUrl: './wizard-seul.component.css'
})
export class WizardSeulComponent {

  constructor(private service:WizardWorldApiService, route: ActivatedRoute){
}
  wizard: Wizards|undefined;
  
}
