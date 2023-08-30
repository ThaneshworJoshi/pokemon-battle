type TNavItem = {
    label: string
    link: string
    isActive?: boolean
}

export interface NavItemsProps {
    itemList: TNavItem[]
}