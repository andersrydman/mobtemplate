import {SayHello} from './Greeter'
describe('app', () => {
  it('greets user', () => {
    expect(SayHello()).toEqual('HELLO WORLD')
  })
})
