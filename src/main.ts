import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideHttpClient} from "@angular/common/http";
import {CityPipe} from "./app/flight-search/city.pipe";

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    // CityPipe // Option 3 - for reusability in services
  ],
});
