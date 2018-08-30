import { Component, OnInit } from '@angular/core';
import { Specialisation } from '../specialisation';
import { SpecialisationService } from '../specialisation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specialisation-overview',
  templateUrl: './specialisation-overview.component.html',
  styleUrls: ['./specialisation-overview.component.css']
})
export class SpecialisationOverviewComponent implements OnInit {

  displayedColumns: string[] = ['level', 'bab', 'fort', 'ref', 'will', 'special'];
  dataSource: object[];
  specialisation: Specialisation;
  spellLevels: string[];
  isSpontaneousCaster: boolean;

  constructor(
    private route: ActivatedRoute,
    private specialisationService: SpecialisationService
  ) { }

  ngOnInit() {
    this.getSpecialisation();
    this.dataSource = this.specialisation.levelProgression;
    this.getSpellLevels();
    this.getIsSpontaneousCaster();
  }



  getEnglishNumberEnding(number: number): string {
    if (number > 3) {
      return number + "th";
    }
    else if (number === 3) {
      return number + "rd";
    }
    else if (number === 2) {
      return number + "nd";
    }
    else if (number === 1) {
      return number + "st";
    }
  }
  scroll(el) {
    var element = document.getElementById(el);
    element.scrollIntoView();
  }

  getSpellLevels(): void {
    var totalLevels = this.dataSource.length;
    this.spellLevels = [];
    var data = this.dataSource[totalLevels - 1]["spellsPerDay"];
    if (data) {

      data.forEach(element => {
        this.spellLevels.push(element["spellLevel"]);
      });

    }
  }

  getIsSpontaneousCaster(): void {
    this.isSpontaneousCaster = this.dataSource[0]["spellsKnown"];
  }

  getSpecialisation(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.specialisationService.getSpecialisation(id)
      .subscribe(specialisation => this.specialisation = specialisation);
  }

}

