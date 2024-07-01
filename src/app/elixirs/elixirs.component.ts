import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ElixirsService } from '../elixirs.service';
import { RouterLink } from '@angular/router';
import { Elixirs } from '../entities';

@Component({
  selector: 'app-elixirs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './elixirs.component.html',
  styleUrl: './elixirs.component.css'
})
export class ElixirsComponent implements OnInit{
  elixirs: Elixirs[]= [];


  constructor(private elixirsService: ElixirsService){}

  ngOnInit():void{
    this.fetchAll();
  }

  fetchAll() : void{
    this.elixirsService.getElixirs().subscribe(response => { this.elixirs = response});
  }
}
