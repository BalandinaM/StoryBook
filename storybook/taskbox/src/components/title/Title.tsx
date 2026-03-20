import s from './Title.module.css'

export type TitleProps = {
    state: 'RED_TITLE' | 'BLUE_TITLE' | 'BROWN_TITLE'
 }


export const Title = (props: TitleProps) => {
    const stateClass = s[props.state];
  return (
    <h1 className={stateClass}>I'm title!!!</h1>
  )
}
