import { Breadcrumb } from 'antd'
import * as Styled from './Breadcrumbs.styled'

type TPathItem<TAdditional = Record<string, never>> = {
  value: string
} & TAdditional

export type TBreadcrumbsProps<TAdditional = Record<string, never>> = {
  /**
   * The items to display in the breadcrumbs
   */
  items: TPathItem<TAdditional>[]
  /**
   * If true, the root item will be included in the breadcrumbs
   */
  includeRoot?: boolean
  /**
   * Callback for when an item is clicked
   */
  onClick?: (clickedItem: TPathItem<TAdditional>) => void
}

export const Breadcrumbs = <TAdditional = Record<string, never>,>({
  items,
  onClick,
  includeRoot = true,
}: TBreadcrumbsProps<TAdditional>) => {
  return (
    <Styled.Breadcrumb>
      <Breadcrumb>
        {includeRoot && <Breadcrumb.Item>root</Breadcrumb.Item>}
        {items.map((item, i) => (
          <Breadcrumb.Item
            key={i}
            onClick={() => {
              onClick?.(item)
            }}
          >
            <Styled.BreadcrumbInner $isClickable={!!onClick && i !== items.length - 1}>
              {item.value}
            </Styled.BreadcrumbInner>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </Styled.Breadcrumb>
  )
}
