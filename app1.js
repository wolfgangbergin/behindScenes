
LOG(`${APPLE} 5 `)
import { LOG} from './app3.js'



import {APPLE} from './app2.js'

let test = ((...rest)=>LOG(rest[0])).call(this, '666')


 