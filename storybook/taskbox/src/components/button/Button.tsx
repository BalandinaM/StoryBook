import s from './Button.module.css'


type ButtonProps = {
    title: string
    onClick: () => void
    state: 'BUTTON_DEFAULT' | 'BUTTON_BIG' | 'BUTTON_SMALL'
}

export const Button = ({title, onClick, state}: ButtonProps) => {
    const stateClass = state === 'BUTTON_DEFAULT' ? '' : s[state];

  return (
    <button className={`${s.button} ${stateClass}`}  onClick={onClick}>{title}</button>
  )
}

export default Button