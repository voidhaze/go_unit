import { Functional } from '../../../../../Class/Functional'
import { Done } from '../../../../../Class/Functional/Done'
import { J } from '../../../../../interface/J'

export interface I<T> {
  unit: J
  name: string
  data: T
}

export interface O<T> {
  data: any
}

export default class Set<T> extends Functional<I<T>, O<T>> {
  constructor() {
    super(
      {
        i: ['unit', 'name', 'data'],
        o: ['data'],
      },
      {
        input: {
          unit: {
            ref: true,
          },
        },
      }
    )
  }

  async f({ unit, name, data }: I<T>, done: Done<O<T>>) {
    try {
      await unit.set(name, data)
      done({ data })
    } catch (err) {
      done(undefined, err)
    }
  }
}