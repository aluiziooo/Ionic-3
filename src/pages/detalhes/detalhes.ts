import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
  providers:[MovieProvider]
})
export class DetalhesPage {
  public filme;
  public filmeid;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider:MovieProvider
  ) {
  }
  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id");
    this.movieProvider.getMovieDetails(this.filmeid).subscribe(data=>{
      let retorno = (data as any);
      this.filme = retorno;
    },error => {console.log(error)})
  }

}
