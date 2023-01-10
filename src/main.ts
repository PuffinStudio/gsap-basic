import './style.scss'
import 'lazysizes'
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks'
import { createHeroTimeline } from './hero'
import { createCinematicTimeline } from './cinematic'
import './colors'
import { createPhotographTimeline } from './photograph'
import axios from 'axios'
import md5 from 'md5'
import dayjs from 'dayjs'

const client = axios.create({
  // baseURL: 'https://api.jd.com',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
})

const sysParams = {
  format: 'json',
  v: '1.0',
  sign_method: 'md5',
  app_key: '9e9a9e26e8f69746453136a7c25d2bf7',
}
const secretkey = '687f31b9270f4d9293865b7b35f82ae7'

// https://zh.javascript.info/onload-ondomcontentloaded
window.addEventListener('load', async function () {
  // run timeline
  createHeroTimeline()
  createCinematicTimeline()
  createPhotographTimeline()
  meituan()

  // const params = handleParams({
  //   method: 'jd.union.open.goods.jingfen.query',
  //   '360buy_param_json': JSON.stringify({
  //     goodsReq: {
  //       eliteId: 22,
  //     },
  //   }),
  // })
  // console.log(params)
  // const res = await client.get('/api/routerjson', {
  //   params,
  // })
  // console.log(res)
})

async function meituan() {
  const key = '0d160b5de0925e6ac3e104bda3624449'
  const params: { [key: string]: any } = {
    actId: 33,
    appkey: '8240d9d03bf0f05f5a25bb1613bce35d',
    sid: 'meituanhongbao',
    linkType: 4,
  }
  const keys = Object.keys(params).sort()
  let sign = key
  keys.forEach((k) => {
    sign += k + params[k]
  })
  sign += key
  const res = await client.get('/api/generateLink', {
    params: {
      ...params,
      sign: md5(sign),
    },
  })
  console.log('res', res)
}

function handleParams(ps: any) {
  const params = {
    ...sysParams,
    ...ps,
    timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  }
  const keys = Object.keys(params).sort()
  console.log(keys)
  let sign = ''
  keys.forEach((k) => {
    const value = params[k]
    // sign += k + typeof value === 'object' ? JSON.stringify(value) : value
    sign += k + value
  })
  sign = md5(secretkey + sign + secretkey)
  return {
    ...params,
    sign: sign.toUpperCase(),
  }
}
