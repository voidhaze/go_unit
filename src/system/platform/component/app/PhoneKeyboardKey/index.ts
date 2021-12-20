import { Element } from '../../../../../Class/Element/Element'
import { Dict } from '../../../../../types/Dict'

export interface I {
  style: Dict<string>
  key: string
}

export interface O {}

export default class PhoneKeyboardKey extends Element<I, O> {
  constructor() {
    super({
      i: ['style', 'key', 'altKey'],
      o: [],
    })
  }
}