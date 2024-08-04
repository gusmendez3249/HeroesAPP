import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform(hero: Hero): string{
    if(!hero.id && !hero.alt_img){
      return 'assets/no-image.png'
    }
    if (hero.alt_img && hero.alt_img.startsWith('https')) return hero.alt_img;
    if (hero.alt_img) return `assets/heroes/${hero.alt_img}.jpg`;
    return "No se ha insertado alguna imagen";
  }
  }


