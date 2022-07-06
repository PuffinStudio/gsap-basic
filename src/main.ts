import './style.scss'
import 'lazysizes'
import { createHeroTimeline } from './hero'
import { createCatTimeline } from './cat'
import { createCinematicTimeline } from './cinematic'
import './colors'

// https://zh.javascript.info/onload-ondomcontentloaded
window.addEventListener('load', function () {
  // run timeline
  createHeroTimeline()
  createCinematicTimeline()
})
