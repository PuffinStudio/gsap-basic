import './style.scss'

import { createHeroTimeline } from './hero'
import { createCatTimeline } from './cat'
import { createVindaTimeline } from './vinda'

window.addEventListener('load', function () {
  // run timeline
  const htl = createHeroTimeline()

  const ctl = createCatTimeline()

  createVindaTimeline()
})
