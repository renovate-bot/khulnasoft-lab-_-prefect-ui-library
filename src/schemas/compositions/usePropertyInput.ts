import { MaybeRefOrGetter, Ref, computed, toValue } from 'vue'
import SchemaFormPropertyInput from '@/schemas/components/SchemaFormPropertyInput.vue'
import SchemaFormPropertyKindJson from '@/schemas/components/SchemaFormPropertyKindJson.vue'
import { SchemaProperty } from '@/schemas/types/schema'
import { isPrefectKindValue } from '@/schemas/types/schemaValues'
import { SchemaValue } from '@/types'
import { withProps } from '@/utilities/components'

// this is a lot easier to just let typescript infer the return type
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function usePropertyInput(schemaProperty: MaybeRefOrGetter<SchemaProperty>, propertyValue: Ref<SchemaValue>) {
  const input = computed(() => {
    const property = toValue(schemaProperty)

    if (!isPrefectKindValue(propertyValue.value)) {
      return withProps(SchemaFormPropertyInput, {
        property: property,
        value: propertyValue.value,
        'onUpdate:value': (value) => propertyValue.value = value,
      })
    }

    if (isPrefectKindValue(propertyValue.value, 'json')) {
      return withProps(SchemaFormPropertyKindJson, {
        value: propertyValue.value,
        'onUpdate:value': (value) => propertyValue.value = value,
      })
    }

    if (isPrefectKindValue(propertyValue.value, 'jinja')) {
      throw 'not implemented'
    }

    if (isPrefectKindValue(propertyValue.value, 'workspace_variable')) {
      throw 'not implemented'
    }

    if (isPrefectKindValue(propertyValue.value, 'none')) {
      throw 'not implemented'
    }

    const exhaustive: never = propertyValue.value
    console.error(new Error(`SchemaFormProperty input is not exhaustive: ${JSON.stringify(exhaustive)}`))

    return { component: null, props: {} }
  })

  return { input }
}