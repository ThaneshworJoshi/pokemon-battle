type TButtonSize = 'small' | 'medium' | 'big';

export interface ButtonProps {
    children: React.ReactNode
    size?: TButtonSize
    onClick?: () => void
}