import './style.scss'
import 'lazysizes'
import { createHeroTimeline } from './hero'
import { createCatTimeline } from './cat'
import { createVindaTimeline } from './vinda'

// https://zh.javascript.info/onload-ondomcontentloaded
window.addEventListener('load', function () {
  // run timeline
  createHeroTimeline()

  const ctl = createCatTimeline()

  createVindaTimeline()
})
