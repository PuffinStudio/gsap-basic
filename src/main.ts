import './style.scss'
import 'lazysizes'
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks'
import { createHeroTimeline } from './hero'
import { createCinematicTimeline } from './cinematic'
import './colors'
import { createPhotographTimeline } from './photograph'

// https://zh.javascript.info/onload-ondomcontentloaded
window.addEventListener('load', function () {
  // run timeline
  createHeroTimeline()
  createCinematicTimeline()
  createPhotographTimeline()
})
