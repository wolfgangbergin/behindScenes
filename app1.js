
LOG(`${APPLE} 5 `)
import { LOG} from './app3.js'



import {APPLE} from './app2.js'


function test(...rest) {
    LOG(arguments[0])
  }

  test.call(this,'666'); 