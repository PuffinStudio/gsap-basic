import './style.scss'
import { gsap } from '../gsap'

export const createCinematicTimeline = () => {
  const cinematic = document.getElementById('cinematic')
  const mode = cinematic!.querySelector('.cinematic-mode')
  const headline = cinematic!.querySelector('.headline')
  const h3 = headline!.querySelector('h3')
  const subheadline = headline!.querySelector('.subheadline')
  const frameView = cinematic!.querySelector('.frame-view')
  const frameBottom = cinematic!.querySelector('.frame-bottom')
  gsap
    .timeline({
      scrollTrigger: {
        trigger: mode,
        start: 'top 90%',
        end: 'bottom 60%',
        scrub: true,
      },
    })
    .from(h3, {
      opacity: 0,
      y: 20,
    })
    .from(
      subheadline,
      {
        opacity: 0,
        y: 20,
      },
      '>',
    )
    .from(
      frameView,
      {
        opacity: 0,
        y: 20,
      },
      '>',
    )
    .from(
      frameBottom,
      {
        opacity: 0,
        y: 30,
      },
      '>',
    )
  let videoPlaying = false
  const frameSticky = cinematic!.querySelector('.frame-sticky')
  const firstIntro = frameSticky!.querySelector('.first')
  const secondIntro = frameSticky!.querySelector('.second')
  const frameDevice = frameSticky!.querySelector('.frame-device')
  const frameDeviceBg = frameDevice!.querySelector('.bg')
  const frameDeviceImg = frameDevice!.querySelector('picture')
  const frameInlineVideo = frameSticky!.querySelector('.inline-video')
  const cinematicVideo = document.getElementById(
    'cinematicVideo',
  ) as HTMLVideoElement | null
  const cinematicControl = document.getElementById(
    'cinematicControl',
  ) as HTMLButtonElement | null
  if (cinematicControl && cinematicVideo) {
    cinematicControl.addEventListener('click', () => {
      if (videoPlaying) {
        cinematicVideo.pause()
        cinematicControl.textContent = 'Pause'
      } else {
        cinematicVideo.play()
        cinematicControl.textContent = 'Play'
      }
      videoPlaying = !videoPlaying
    })
  }
  frameDeviceImg!.style.opacity = '0'
  gsap
    .timeline({
      scrollTrigger: {
        trigger: frameSticky,
        start: 'top 10%',
        scrub: true,
        pin: true,
        // markers: true,
        onToggle: (self) => {
          if (cinematicVideo !== null && cinematicControl !== null) {
            if (self.isActive) {
              cinematicControl.textContent = 'Play'
              cinematicControl.style.display = 'block'
              cinematicVideo.play()
              videoPlaying = true
            } else {
              cinematicControl.style.display = 'none'
              videoPlaying = false
              cinematicVideo.pause()
            }
          }
        },
      },
    })
    .to(
      firstIntro,
      {
        opacity: 0,
        y: -30,
        ease: 'expo.out',
      },
      0.1,
    )
    .fromTo(
      secondIntro,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
      },
      '<75%',
    )
    .to(frameBottom, {
      opacity: 0,
      y: -30,
      ease: 'expo.out',
    })
    .from(frameDeviceBg, {
      zIndex: 1,
      backgroundColor: '#fff',
      onComplete: () => {
        frameDeviceImg!.style.opacity = '1'
      },
      onReverseComplete: () => {
        frameDeviceImg!.style.opacity = '0'
      },
    })
    .from(frameDevice, {
      transform: 'matrix(2.7, 0, 0, 2.7, 0, 250)',
    })
    .from(
      frameInlineVideo,
      {
        width: 980,
      },
      '<',
    )
}
