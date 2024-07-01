import { Component, OnInit, inject } from '@angular/core';
import { WizardWorldApiService } from '../wizard-world-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { FilterPipe } from '../filter.pipe';
import { Elixirs, Houses, Wizards } from '../entities';
import { WizardSeulComponent } from '../wizard-seul/wizard-seul.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [FormsModule, CommonModule, FilterPipe, WizardSeulComponent, RouterLink],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent{
  
  // elixirs: Elixirs[]= [];
  wizards: Wizards[]= [];
  // houses: Houses[]= [];
  // searchText: string="";

  constructor(private wizardService: WizardWorldApiService) { }

 wizards$ = inject(WizardWorldApiService).getWizards();

  // ngOnInit(): void {
  //   this.fetchAll();
  // }

  // fetchAll(): void {
  //   this.wizardService.getWizards().subscribe(response => { this.wizards = response});
  //   // forkJoin({
  //   //   elixirs: this.wizardService.getElixirs(),
  //   //   wizards: this.wizardService.getWizards(),
  //   //   houses: this.wizardService.getHouses()
  //   // }).subscribe(response => {
  //   //   this.elixirs = response.elixirs;
  //   //   this.wizards = response.wizards;
  //   //   this.houses = response.houses;
  //   // });
  // }
  
  
}
