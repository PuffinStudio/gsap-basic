import './style.scss'
import { gsap } from '../gsap'

export const createCinematicTimeline = () => {
  const cinematic = document.getElementById('cinematic')
  if (cinematic) {
    const mode = cinematic.querySelector('.cinematic-mode')
    const headline = cinematic.querySelector('#cinematicHeadline')
    const h3 = headline!.querySelector('h3')
    const subheadline = headline!.querySelector('.subheadline')
    const sticky = cinematic.querySelector('#cinematicSticky')
    const hardware = cinematic.querySelector('#cinematicHardware')
    const bg = cinematic.querySelector('#cinematicBg')
    const screen = cinematic.querySelector('#cinematicScreen')
    const content: HTMLDivElement | null =
      cinematic.querySelector('.frame-content')
    const frameVideo = cinematic.querySelector('.frame-video')
    const video: HTMLVideoElement | null =
      cinematic.querySelector('#cinematicVideo')
    const control: HTMLButtonElement | null =
      cinematic.querySelector('#cinematicControl')
    const bottom = cinematic.querySelector('#cinematicBottom')
    const textFirst = bottom!.querySelector('.frame-first')
    const textFirstP1 = bottom!.querySelector('.p1')
    const textFirstP2 = bottom!.querySelector('.p2')
    const textSecond = bottom!.querySelector('.frame-second')
    const textSecondItemFirst = bottom!.querySelector('.item-first')
    const textSecondItemSecond = bottom!.querySelector('.item-second')
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
        content,
        {
          opacity: 0,
          y: 20,
        },
        '>',
      )
      .from(
        bottom,
        {
          opacity: 0,
          y: 30,
        },
        '>',
      )
    let videoPlaying = false
    if (control && video) {
      control.addEventListener('click', () => {
        if (videoPlaying) {
          video.pause()
          control.textContent = 'Pause'
        } else {
          video.play()
          control.textContent = 'Play'
        }
        videoPlaying = !videoPlaying
      })
    }
    gsap
      .timeline({
        scrollTrigger: {
          trigger: sticky,
          start: 'top 10%',
          scrub: true,
          pin: true,
          markers: true,
          onToggle: (self) => {
            if (video && control) {
              if (self.isActive) {
                control.textContent = 'Play'
                control.style.display = 'block'
                video.play()
                videoPlaying = true
              } else {
                control.style.display = 'none'
                videoPlaying = false
                video.pause()
              }
            }
          },
        },
      })
      .to(
        textFirstP1,
        {
          opacity: 0,
          y: -30,
          ease: 'expo.out',
        },
        0.1,
      )
      .fromTo(
        textFirstP2,
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
      .to(textFirst, {
        opacity: 0,
        y: -30,
        ease: 'expo.out',
      })
      .from(bg, {
        backgroundColor: '#fff',
      })
      .from(
        hardware,
        {
          opacity: 0,
          onComplete: () => {
            content!.style.height = '488px'
          },
          onReverseComplete: () => {
            content!.style.height = 'auto'
          },
        },
        '<',
      )
      .from(hardware, {
        transform: 'matrix(2.7, 0, 0, 2.7, 0, 250)',
        duration: 2,
      })
      .from(
        bg,
        {
          transform: 'matrix(2.7, 0, 0, 2.7, 0, 250)',
          duration: 2,
        },
        '<',
      )
      .from(
        frameVideo,
        {
          top: 0,
          width: 980,
          duration: 2,
        },
        '<',
      )
      .from(
        screen,
        {
          opacity: 0,
          transform: 'matrix(1.2, 0, 0, 1.2, 0, 20)',
          duration: 1.8,
        },
        '>-50%',
      )
      .from(
        textSecond,
        {
          opacity: 0,
          y: 30,
        },
        '>-10%',
      )
      .to(textSecondItemFirst, {
        opacity: 0,
        y: -30,
        ease: 'expo.out',
      })
      .fromTo(
        textSecondItemSecond,
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
  }
}
