/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size,speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 20;
    console.log('ok: ' + this.left);
  }
  this.move = function () {
    this.left = Math.floor(Math.random()*800);
    this.top = Math.floor(Math.random()*300);
  }

}

var hero = new Hero('Nobita.png', 20, 30, 200,500);

function start(){
  if(hero.left < window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size){
    hero.move();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, hero.speed)
}

start();