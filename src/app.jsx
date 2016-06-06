import React from 'react'
import {render} from 'react-dom'

function test() {
  console.log(this)
}

this::test()

render(<div>test</div>, document.getElementById('app'))
