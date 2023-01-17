import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' },
  ];

  events = [];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(bluePrintData: { serverName: string; content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.content,
    });
  }

  onChangeFirst(): void {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  assignEventsValue(event: any) {
    console.log(event);
    this.events = event;
    console.log('this.events = ', this.events);
  }

  ngIf(eventOrdinal: number) {
    console.log('eventOrdinal: ', eventOrdinal);
    return eventOrdinal % 2 == 0;
  }
}
