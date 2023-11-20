import { Breadcrumb } from 'antd'
import * as Styled from './Breadcrumbs.styled'

type TPathItem<TAdditional = {}> = {
  value: string
} & TAdditional

export type TBreadcrumbsProps<TAdditional = {}> = {
  /**
   * The items to display in the breadcrumbs
   */
  items: TPathItem<TAdditional>[]
  includeRoot?: boolean
  onClick?: (clickedItem: TPathItem<TAdditional>) => void
}

export const Breadcrumbs = <TAdditional = {},>({
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
