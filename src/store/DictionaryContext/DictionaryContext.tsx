import React, { createContext, useMemo } from 'react'
import {
  ActionDictionaryDefinition,
  AttributeDictionaryDefinition,
  DecoratorDictionaryDefinition,
  useGetDictionaryForAllEntitiesQuery,
} from '../../gql-models'
import type { TDictionary, TDictionaryContext, TDictionaryEntityEntries } from './types'
import { EDictionaryEntityId, EDictionaryEntryType } from './enums'

export const DictionaryContext = createContext<TDictionaryContext>({})

export const DictionaryProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const { data: dataDictionary } = useGetDictionaryForAllEntitiesQuery()

  // Format returned data into a quick to access dictionary
  const dictionary = useMemo<TDictionary>(() => {
    const dictionary: TDictionary = {}

    dataDictionary?.getDictionaryForAllEntities.forEach(
      ({ entityDefinition, actionDefinitionList, attributeDefinitionList, decoratorDefinitionList }) => {
        const actions: TDictionaryEntityEntries<ActionDictionaryDefinition> = {}
        const attributes: TDictionaryEntityEntries<AttributeDictionaryDefinition> = {}
        const decorators: TDictionaryEntityEntries<DecoratorDictionaryDefinition> = {}

        actionDefinitionList?.forEach(action => {
          actions[action.id!] = action
        })

        attributeDefinitionList?.forEach(attribute => {
          attributes[attribute.id!] = attribute
        })

        decoratorDefinitionList?.forEach(decorator => {
          decorators[decorator.id!] = decorator
        })

        dictionary[entityDefinition!.id as EDictionaryEntityId] = {
          definition: entityDefinition!,
          [EDictionaryEntryType.Action]: actions,
          [EDictionaryEntryType.Attribute]: attributes,
          [EDictionaryEntryType.Decorator]: decorators,
        }
      }
    )

    return dictionary
  }, [dataDictionary?.getDictionaryForAllEntities])

  const dataDictionaryContext = useMemo(
    () => ({
      dictionary,
    }),
    [dictionary]
  )

  return <DictionaryContext.Provider value={dataDictionaryContext}>{children}</DictionaryContext.Provider>
}
