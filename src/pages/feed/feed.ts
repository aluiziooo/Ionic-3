import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MovieProvider
  ]
})
export class FeedPage {
  public obj_feed = {
    titulo:"Aluizio Neto",
    data: "November 5, 1955",
    desc: "Vai ser um App do bolado.",
    qntd_likes: 12,
    qntd_com: 4,
    time_com: "11h ago"
  }

  public lista_filmes = new Array<any>();

  public nomeUsuario:String = "Aluizio Neto do codigo";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
  }

  public somaDoisNumeros(num1:number, num2:number):void{
    alert(num1+num2);
  }
  ionViewDidLoad() {
    //this.somaDoisNumeros(3,4);
    this.movieProvider.getLatestMovie().subscribe(
      data=>{
        const response = (data as any);
        this.lista_filmes = response.results;
        console.log(response);
    },erro=>{
      console.log(erro);
    })
  }

}
