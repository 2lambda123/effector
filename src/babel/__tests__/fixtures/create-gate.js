import {createDomain} from 'effector'
import {createGate} from 'effector-react'
import {createGate as renamedGate} from 'effector-react/scope'
import {createGate as compatGate} from 'effector-react/compat'

const Gate1 = createGate()
const Gate2 = createGate('gate2')
const Gate3 = createGate({
  defaultState: {a: 1},
  domain: createDomain(),
  name: 'gate3',
})
const Gate4 = createGate('default', {counter: 0})
const Gate5 = createGate({
  and: ['gate2'],
  or: {
    loc: {
      file: _effectorFileName,
      line: 7,
      column: 14,
    },
    sid: '4gk531',
  },
})

const TheGate1 = renamedGate()
const TheGate2 = renamedGate('gate2')
const TheGate3 = renamedGate({
  defaultState: {a: 1},
  domain: createDomain(),
  name: 'gate3',
})

const CompatGate1 = compatGate()
const CompatGate2 = compatGate('gate2')
const CompatGate3 = compatGate({
  defaultState: {a: 1},
  domain: createDomain(),
  name: 'gate3',
})
