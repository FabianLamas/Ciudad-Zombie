
var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion, posInicialX, posInicialY/*, parametro/s extra de ZombieConductor*/) {
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
  this.posInicialX = this.x;
  this.posInicialY = this.y;

}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

ZombieConductor.prototype.mover = function(){


  if(this.direccion == 'horizontal'){
    this.x += this.velocidad;
  }else if(this.direccion == 'abajo'){
    this.y += this.velocidad;
  }else {
    this.y -= this.velocidad;
  }
  
  if(this.x > this.rangoMov.hastaX){
    this.x = this.posInicialX;
  }

  if(this.y > this.rangoMov.hastaY || this.y < this.rangoMov.desdeY){
    this.y = this.posInicialY;
  }
}