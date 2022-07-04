import './style.scss'

import { createHeroTimeline } from './hero'
import { createCatTimeline } from './cat'
import { createVindaTimeline } from './vinda'

// https://zh.javascript.info/onload-ondomcontentloaded
document.addEventListener('load', function () {
  // run timeline
  const htl = createHeroTimeline()

  const ctl = createCatTimeline()

  createVindaTimeline()
})
