
var Jugador = {
 
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 10,

  cambiarSrpite: function(direccion){
    switch (direccion) {
      case 'izq':
        this.sprite = 'imagenes/auto_rojo_izquierda.png';
        this.ancho = 30;
        this.alto = 15;
        break;
      case 'der':
        this.sprite = 'imagenes/auto_rojo_derecha.png';
        this.ancho = 30;
        this.alto = 15;
        break;
      case 'arriba':
        this.sprite = 'imagenes/auto_rojo_arriba.png';
        this.ancho = 15;
        this.alto = 30;
        break;
      case 'abajo':
        this.sprite = 'imagenes/auto_rojo_abajo.png';
        this.ancho = 15;
        this.alto = 30;
        break;
    }
  },
  moverse: function(velX, velY){
    this.x += velX;
    this.y += velY;
  },
  perderVidas: function(vidas){
    this.vidas += vidas;
  }
}
