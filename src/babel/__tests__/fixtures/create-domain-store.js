import {createDomain} from 'effector'

const domain = createDomain()

const a = domain.store('bar')
const b = domain.store('h', {option: 'test', ['na' + 'me']: 'LOL'})
const c = domain.store('h', {name: 'test'})

const d = domain.store('h', null)

const e = domain.store('h', 4234)
const f = domain.store('h', {})

const aAlias = domain.createStore('bar')
const bAlias = domain.createStore('h', {option: 'test', ['na' + 'me']: 'LOL'})
const cAlias = domain.createStore('h', {name: 'testAlias'})

const dAlias = domain.createStore('h', null)

const eAlias = domain.createStore('h', 4234)
const fAlias = domain.createStore('h', {})
const {sid} = domain.createStore(null)
const {shortName} = domain.createStore(null, {name: 'foo'})

domain.createStore(null)

domain.createStore(null)
