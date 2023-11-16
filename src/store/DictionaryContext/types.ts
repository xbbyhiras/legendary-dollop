import type {
  ActionDictionaryDefinition,
  AttributeDictionaryDefinition,
  DecoratorDictionaryDefinition,
  EntityDictionaryDefinition,
} from '../../gql-models'
import type { EDictionaryEntityId, EDictionaryEntryType } from './enums'

export type TDictionaryContext = {
  dictionary?: TDictionary
}

export type TDictionaryEntityId = EDictionaryEntityId[keyof EDictionaryEntityId]

export type TDictionaryEntityEntries<TDictionaryEntryType> = {
  [id: string]: TDictionaryEntryType
}

export type TDictionary = {
  [key in EDictionaryEntityId]?: {
    definition: EntityDictionaryDefinition
    [EDictionaryEntryType.Action]: TDictionaryEntityEntries<ActionDictionaryDefinition>
    [EDictionaryEntryType.Attribute]: TDictionaryEntityEntries<AttributeDictionaryDefinition>
    [EDictionaryEntryType.Decorator]: TDictionaryEntityEntries<DecoratorDictionaryDefinition>
  }
}
