import { Component } from '@angular/core';
import { NavController,ActionSheetController,Platform,AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'page-actionsheet',
  templateUrl: 'actionsheet.html'
})
export class ActionSheetPage {
  slides=[
    {
     title:"Welcome to the ionic",
     discription:"The ionic component is important",
     image:"../../assets/ionic-meta.jpg",
    },
    {
      title:"what is ionic",
      discription:"It is a framework.",
      image:"../../assets/cox-saopaulo-highway.jpg",
    }
  ];
 
  testRadioResult: any;
  testRadioOpen: boolean;
  public tap: number = 0;
  public press: number = 0;
  public swipe: number = 0;
  langs;langForm;
  brightness: number=20;
  contrast: number=20;
  text:number=20;
  itemss;
  constructor(public navCtrl: NavController,public actionsheetCtrl: ActionSheetController, public platform: Platform,public alertCtrl: AlertController,public loadingCtrl:LoadingController)
  {
     this.langForm = new FormGroup({
       "langs": new FormControl({value: 'rust', disabled: false})
     });
     this.initializeItemss();
    
     
  }

   dosubmit(event) {
     console.log('Submitting form', this.langForm.value);
     event.preventDefault();
   }

  PresentLoading(){
    this.loadingCtrl.create({
      content:'Please Wait...',
      duration:2000,
      dismissOnPageChange:true
    }).present();
  }
  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  tapEvent(e) {
    this.tap++
  }
  pressEvent(e) {
    this.press++
  }
  swipeEvent(e) {
    this.swipe++
  }
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Songs',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('android') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('android') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('android') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('android') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('android') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Anindo, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }


  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new song you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Enter Name '
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Orange',
      value: 'orange',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }

  initializeItemss(){
    this.itemss=[
      'NewZealand',
      'Canada',
      'India',
      'USA',
      'UK'
    ];
  }
  getItemss(ev:any){
    this.initializeItemss();

    var val=ev.target.value;
    if(val && val.trim() !='')
    {
      this.itemss=this.itemss.filter((item)=>{
        return(item.toLowerCase().indexOf(val.toLowerCase())> -1);
      })
    }
  }
  
}