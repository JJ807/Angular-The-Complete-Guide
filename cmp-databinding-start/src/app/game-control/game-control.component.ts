import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  private events: number[] = [];
  private intervalRef;

  @Output() numberEmitter = new EventEmitter<number[]>();

  constructor() {}

  ngOnInit(): void {}

  start(): void {
    this.intervalRef = setInterval(() => this.emitEvent(), 1000);
  }

  emitEvent(): void {
    this.events.push(this.events.length);
    this.numberEmitter.emit(this.events);
  }

  stop(): void {
    clearInterval(this.intervalRef);
  }
}
