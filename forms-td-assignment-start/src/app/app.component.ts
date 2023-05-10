import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  subscriptions = ["Basic", "Advanced", "Pro"];
  defaultValue = "Advanced";

  onSubmit(f: any) {
    console.log(f.controls);
    console.log('test2');
  }
}
