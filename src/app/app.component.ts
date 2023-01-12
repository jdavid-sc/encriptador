import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'encriptador';

  texto:string = '';
  textoListo: string = '';


  claves =  [
    {
      letra: 'a',
      clave: 'ai'
    },
    {
      letra: 'e',
      clave: 'enter'
    },
    {
      letra: 'i',
      clave: 'imes'
    },
    {
      letra: 'o',
      clave: 'ober'
    },
    {
      letra: 'u',
      clave: 'ufat'
    },
  ]

  encriptar(){
      const textoDesencriptar = this.texto.split('')
    textoDesencriptar.forEach((keyLetra, index) => {
      const letraEncontrada =  this.claves.find(key => key.letra == keyLetra )
      if(letraEncontrada){
        textoDesencriptar[index] = letraEncontrada.clave
         this.textoListo = textoDesencriptar.join('')
      }

    })
  }

  desencriptar(){
    this.textoListo = this.texto
  }

  copiarTexto(){  
    

  }
}
