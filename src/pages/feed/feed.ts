import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { Refresher } from 'ionic-angular/components/refresher/refresher';
import { DetalhesPage } from '../detalhes/detalhes';

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
  public page;
  public infiniteScroll;

  public loader;
  public refresher;
  public isRefreshing: boolean =false;
  public nomeUsuario:String = "Aluizio Neto do codigo";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController) {
  }
  abreCarregango() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando Filme..."
    });
    this.loader.present();
  }
  fechaCarregando(){
    this.loader.dismiss();
  }
  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregandoFilmes();
  }
  ionViewDidEnter() {
    this.carregandoFilmes();
  }
  abrirDetalhes(filme):void{
    console.log(filme);
    this.navCtrl.push(DetalhesPage, {id: filme.id});
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregandoFilmes(true);

  }

  carregandoFilmes(newpage: boolean = false){
    this.abreCarregango();
    this.movieProvider.getLatestMovie(this.page).subscribe(
      data=>{
        const response = (data as any);

        if(newpage){
          this.lista_filmes = this.lista_filmes.concat(response.results);
          console.log(this.lista_filmes);
          this.infiniteScroll.complete();
        }else{
          this.lista_filmes = response.results;
        }
        this.fechaCarregando();
        if(this.isRefreshing){
          this.refresher.complete();
        }
        this.isRefreshing = false;
    },erro=>{
      console.log(erro);
      this.fechaCarregando();
        if(this.isRefreshing){
          this.refresher.complete();
        }
        this.isRefreshing = false;
    })
  }

}
