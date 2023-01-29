import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3-directives',
  templateUrl: './assignment3-directives.component.html',
  styles: [
    `
      .whiteColor {
        color: white;
      }
    `,
  ],
})
export class Assignment3DirectivesComponent implements OnInit {
  paragraphDisplayed = false;
  buttonClickLogs: Date[] = [];

  constructor() {}

  ngOnInit(): void {}

  toggleParagraphDisplay(): void {
    this.paragraphDisplayed = !this.paragraphDisplayed;
    // this.buttonClickLogs.push(this.buttonClickLogs.length + 1);
    this.buttonClickLogs.push(new Date());
  }

  getColor(logItemIndex: number): string {
    return this.isLengthConditionMet(logItemIndex) ? 'blue' : '';
  }

  isLengthConditionMet(logItemIndex: number): boolean {
    return logItemIndex > 4;
  }
}
