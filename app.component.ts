import { Component } from '@angular/core';
import { Platform,ActionSheetController,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ActionSheetPage } from '../pages/ActionSheet/actionsheet';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ActionSheetPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
