import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public objeto_feed = {
      titulo:"Jamesson Faria",
      data:"November 5, 1955",
      descricao:"Criando um app incrivel.",
      qtd_likes: 18,
      qtd_comments: 6,
      time_comment: "11h ago"
  }

  public nomeUsuario: string = 'Teste Jamesson';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   
  }

}
