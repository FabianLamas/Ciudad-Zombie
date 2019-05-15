/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion, posInicialX, posInicialY/*, parametro/s extra de ZombieConductor*/) {
  /* Completar constructor a partir de Enemigo */
  //Enemigo.call(/* ... */);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
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

/* Completar creacion del ZombieConductor */

/* Completar metodos para el movimiento y el ataque */
