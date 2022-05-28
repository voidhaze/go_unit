import { Unit } from '../Class/Unit'
import { Classes, Specs } from '../types'
import { UnitBundle } from '../types/UnitBundle'
import { UnitBundleSpec } from '../types/UnitBundleSpec'
import { bundleClass } from './bundleClass'
import { fromId } from './fromId'

export function fromBundle<T extends Unit>(
  bundle: UnitBundleSpec,
  specs: Specs,
  classes: Classes
): UnitBundle<T> {
  const { unit, specs: _specs } = bundle

  const { id } = unit

  const Class = fromId<T>(id, { ..._specs, ...specs }, classes, {})

  const Bundle = bundleClass<T>(Class, bundle)

  return Bundle
}
