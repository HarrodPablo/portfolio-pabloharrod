import { florProject } from './projects/flor.js';
import { goodshopProject } from './projects/goodshop.js';
import { ikigaiProject } from './projects/ikigai.js';
import { newnorthProject } from './projects/newnorth.js';
import { radiologyProject } from './projects/radiology.js';
import { weddingProject } from './projects/wedding.js';
import { wondersProject } from './projects/wonders.js';
import { uiTranslations } from './ui.js';

export const translations = {
  en: {
    nav: uiTranslations.en.nav,
    hero: uiTranslations.en.hero,
    projects: {
      ...uiTranslations.en.projectsLabels,
      ikigai: ikigaiProject.en,
      radiology: radiologyProject.en,
      newnorth: newnorthProject.en,
      wedding: weddingProject.en,
      goodshop: goodshopProject.en,
      flor: florProject.en,
      wonders: wondersProject.en
    },
    about: uiTranslations.en.about,
    contact: uiTranslations.en.contact
  },
  es: {
    nav: uiTranslations.es.nav,
    hero: uiTranslations.es.hero,
    projects: {
      ...uiTranslations.es.projectsLabels,
      ikigai: ikigaiProject.es,
      radiology: radiologyProject.es,
      newnorth: newnorthProject.es,
      wedding: weddingProject.es,
      goodshop: goodshopProject.es,
      flor: florProject.es,
      wonders: wondersProject.es
    },
    about: uiTranslations.es.about,
    contact: uiTranslations.es.contact
  }
};
