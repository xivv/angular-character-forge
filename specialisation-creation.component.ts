import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-Specialisation-creation',
  templateUrl: './Specialisation-creation.component.html',
  styleUrls: ['./Specialisation-creation.component.css']
})
export class SpecialisationCreationComponent implements OnInit {

  constructor() { }

  richtTextOptions: object = {
    placeholderText: 'Ability text',
    charCounterCount: true,
    charCounterMax: 8000,
    fileUpload: false,
    videoUpload: false,
    imageUpload: false
  };

  htmlVariable: string;

  className: string;
  classImage: string;
  flavourText: string;
  roleText: string;
  alignment: string;
  hitDie: number = 6;
  startingWealth: string = "2d6 × 10 gp (average 70 gp.) In addition, each character begins play with an outfit worth 10 gp or less.";
  skillRanksPerLevel: number = 2;
  skillRanksPerLevelModifier: string = "Int";
  weaponAndArmorProficiency: string = "A barbarian is proficient with all simple and martial weapons, light armor, medium armor, and shields (except tower shields).";

  maxLevel: number = 20;
  abilities: object[] = [];
  classSkills: object[] = [];
  bab: string = "Full";
  fortitudeSave = "Good Save";
  reflexSave = "Good Save";
  willSave = "Good Save";

  abilityText: string;
  abilityType: string = "Ex";
  abilityName: string;
  abilityLevel: number;

  spellCasterType: string = "No";
  isSpellCaster: boolean = false;
  spellLevelStarting: number;
  spellProgression: string = "Full Caster (Cleric)";

  maxCasterProgression: object = {
    "has0LevelSpells": true,
    "progression": [
      [3],
      [4],
      [5],
      [6, 3],
      [6, 4],
      [6, 5, 3],
      [6, 6, 4],
      [6, 6, 5, 3],
      [6, 6, 6, 4],
      [6, 6, 6, 5, 3],
      [6, 6, 6, 6, 4],
      [6, 6, 6, 6, 5, 3],
      [6, 6, 6, 6, 6, 4],
      [6, 6, 6, 6, 6, 5, 3],
      [6, 6, 6, 6, 6, 6, 4],
      [6, 6, 6, 6, 6, 6, 5, 3],
      [6, 6, 6, 6, 6, 6, 6, 4],
      [6, 6, 6, 6, 6, 6, 6, 5, 3],
      [6, 6, 6, 6, 6, 6, 6, 6, 4],
      [6, 6, 6, 6, 6, 6, 6, 6, 6],
    ]
  };

  fullCasterProgression: object = {
    "has0LevelSpells": true,
    "progression": [
      [3, 1],
      [4, 2],
      [4, 2, 1],
      [4, 3, 2],
      [4, 3, 2, 1],
      [4, 3, 3, 2],
      [4, 4, 3, 2, 1],
      [4, 4, 3, 3, 2],
      [4, 4, 4, 3, 2, 1],
      [4, 4, 4, 3, 3, 2],
      [4, 4, 4, 4, 3, 2, 1],
      [4, 4, 4, 4, 3, 3, 2],
      [4, 4, 4, 4, 4, 3, 2, 1],
      [4, 4, 4, 4, 4, 3, 3, 2],
      [4, 4, 4, 4, 4, 4, 3, 2, 1],
      [4, 4, 4, 4, 4, 4, 3, 3, 2],
      [4, 4, 4, 4, 4, 4, 4, 3, 2, 1],
      [4, 4, 4, 4, 4, 4, 4, 3, 3, 2],
      [4, 4, 4, 4, 4, 4, 4, 4, 3, 3],
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    ]
  };

  halfCasterProgression: object = {
    "has0LevelSpells": false,
    "progression": [
      [1],
      [2],
      [3],
      [3, 1],
      [4, 2],
      [4, 3],
      [4, 3, 1],
      [4, 4, 2],
      [5, 4, 3],
      [5, 4, 3, 1],
      [5, 4, 4, 2],
      [5, 5, 4, 3],
      [5, 5, 4, 3, 1],
      [5, 5, 4, 4, 2],
      [5, 5, 5, 4, 3],
      [5, 5, 5, 4, 3, 1],
      [5, 5, 5, 4, 4, 2],
      [5, 5, 5, 5, 4, 3],
      [5, 5, 5, 5, 5, 4],
      [5, 5, 5, 5, 5, 5],
    ]
  };

  lowCasterProgression: object = {
    "has0LevelSpells": false,
    "progression": [
      [0],
      [1],
      [1],
      [1, 0],
      [1, 1],
      [2, 1],
      [2, 1, 0],
      [2, 1, 1],
      [2, 2, 1],
      [3, 2, 1, 0],
      [3, 2, 1, 1],
      [3, 2, 2, 1],
      [3, 3, 2, 1],
      [4, 3, 2, 1],
      [4, 3, 2, 2],
      [4, 3, 3, 2],
      [4, 4, 3, 3]
    ]
  };

  lowCasterFastProgression: object = {
    "has0LevelSpells": false,
    "progression": [
      [1],
      [1],
      [1],
      [1, 1],
      [1, 1],
      [2, 1],
      [2, 1, 1],
      [2, 1, 1],
      [2, 2, 1],
      [3, 2, 1, 1],
      [3, 2, 1, 1],
      [3, 2, 2, 1],
      [3, 3, 2, 1],
      [4, 3, 2, 1],
      [4, 3, 2, 2],
      [4, 3, 3, 2],
      [4, 4, 3, 2]
    ]
  };

  availableClassSkills: string[] = [
    "Acrobatics",
    "Appraise",
    "Bluff",
    "Climb",
    "Craft",
    "Diplomacy",
    "Disable Device",
    "Disguise",
    "Escape Artist",
    "Fly",
    "Handle Animal",
    "Heal",
    "Intimidate",
    "Knowledge (arcana)",
    "Knowledge (dungeoneering)",
    "Knowledge (engineering)",
    "Knowledge (geography)",
    "Knowledge (history)",
    "Knowledge (local)",
    "Knowledge (nature)",
    "Knowledge (nobility)",
    "Knowledge (planes)",
    "Knowledge (religion)",
    "Linguistics",
    "Perception",
    "Perform",
    "Profession",
    "Ride",
    "Sense Motive",
    "Sleight of Hand",
    "Spellcraft",
    "Stealth",
    "Survival",
    "Swim",
    "Use Magic Device"
  ];


  createSpellProgression(spellProgressionObject: object, level: number): object[] {

    var progression: object[] = [];
    var startingLevel = 1;

    if (spellProgressionObject["has0LevelSpells"]) {
      startingLevel = 0;
    }

    for (let index = 0; index < spellProgressionObject["progression"][level].length; index++) {
      var spellProgression: object = {
        spellLevel: startingLevel,
        amount: spellProgressionObject["progression"][level][index]
      };

      progression.push(spellProgression);
      startingLevel++;
    };
    return progression;
  }

  createClassJson(): object {

    var classObject = {
      className: this.className,
      classImage: this.classImage,
      flavourText: this.flavourText,
      roleText: this.roleText,
      alignment: this.alignment,
      hitDie: "d" + this.hitDie,
      startingWealth: this.startingWealth,
      classSkills: this.classSkills,
      skillRanksPerLevel: this.skillRanksPerLevel + " + " + this.skillRanksPerLevelModifier + " modifier.",
      weaponAndArmorProficiency: this.weaponAndArmorProficiency,
      levelProgression: [

      ],
      favouredClassBonus: [
      ]
    };

    var babProgression: number[] = this.generateStatArray(this.maxLevel, 1, 1);

    if (this.bab === "3/4") {
      babProgression = this.generateStatArray(this.maxLevel, 3, 4);
    } else if (this.bab === "Half") {
      babProgression = this.generateStatArray(this.maxLevel, 1, 2);
    }

    var fortProgression: number[] = this.generatSavingThrowArray(this.maxLevel, this.fortitudeSave === "Good Save");
    var reflexProgression: number[] = this.generatSavingThrowArray(this.maxLevel, this.reflexSave === "Good Save");
    var willProgression: number[] = this.generatSavingThrowArray(this.maxLevel, this.willSave === "Good Save");

    var specials: object[] = [];
    var spellObject: object;

    if (this.isSpellCaster) {
      if (this.spellProgression == "Full Caster (Cleric)") {
        spellObject = this.fullCasterProgression;
      } else if (this.spellProgression == "Half Caster (Bard)") {
        spellObject = this.halfCasterProgression;
      } else if (this.spellProgression == "Low Caster (Paladin)") {
        spellObject = this.lowCasterProgression;
      } else if (this.spellProgression == "Low Caster (Bloodrager)") {
        spellObject = this.lowCasterFastProgression;
      } else if (this.spellProgression == "Max Caster (Sorcerer)") {
        spellObject = this.maxCasterProgression;
      }
    }

    this.abilities.forEach(element => {

      var ability: object = {
        name: element["abilityName"],
        description: element["abilityText"],
        type: element["abilityType"],
        level: element["abilityLevel"]
      }

      specials.push(ability);
    });

    for (var i = 1; i <= this.maxLevel; i++) {
      var level: object = {
        level: i,
        bab: babProgression[i - 1],
        fort: fortProgression[i - 1],
        ref: reflexProgression[i - 1],
        will: willProgression[i - 1],
        special: specials.find(element => element["level"] === i),
        spellsPerDay: [],
        spellsKnown: []
      };

      if (this.isSpellCaster) {
        if ((this.spellLevelStarting && i >= this.spellLevelStarting) || this.spellLevelStarting == null) {
          level["spellsPerDay"] = [this.createSpellProgression(spellObject, i - this.spellLevelStarting)];
        }
      }
      classObject.levelProgression.push(level);
    }

    console.log(classObject);
    return classObject;
  }

  removeAbility(index: number) {

    this.abilities.splice(index, 1);
  }

  addAbility(): void {

    var ability: object = {
      abilityName: this.abilityName,
      abilityType: this.abilityType,
      abilityLevel: this.abilityLevel,
      abilityText: this.abilityText
    };

    this.abilities.push(ability);
  }

  spellCasterTypeChanged(): void {

    if (this.spellCasterType !== "No") {
      this.isSpellCaster = true;
    }
    else {
      this.isSpellCaster = false;
    }
  }
  generateStatArray(totalLevels: number, ratio1: number, ratio2: number): number[] {
    var ratio: number = ratio1 / ratio2;
    var statList: number[] = [];

    for (var i = 1; i <= totalLevels; i++) {
      statList.push(Math.floor(i * ratio));
    }
    return statList;
  }

  generatSavingThrowArray(totalLevels: number, goodsave: boolean): number[] {

    var statList: number[] = [];

    for (var i = 1; i <= totalLevels; i++) {
      if (goodsave) {
        statList.push(Math.floor(i * 0.5 + 2));
      } else {
        statList.push(Math.floor(i * 0.3));
      }
    }
    return statList;
  }

  generateSpellsPerDay

  ngOnInit() {

  }

}
