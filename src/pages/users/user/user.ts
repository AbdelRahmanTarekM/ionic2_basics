import { NavParams, NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})
export class UserPage implements OnInit {
    name: string;

    constructor(private navParams: NavParams, private navCtrl:NavController) { }

    ngOnInit(): void {
        this.name = this.navParams.get("userName");
    }

    onBack(){
        this.navCtrl.pop();
    }

    onBackToRoot(){
        this.navCtrl.popToRoot();
    }
}