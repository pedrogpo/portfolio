import { forwardRef, InputHTMLAttributes } from 'react'
import { ColorThemeType } from '~/core/constants/theme'
import * as S from './styles'

type InputAppProps = InputHTMLAttributes<HTMLInputElement> & {
  sizeOf?: 'm' | 'l'
  iconPos?: 'left' | 'right'
  icon?: JSX.Element
  iconSize?: number
  className?: string
  background?: ColorThemeType
  error?: string
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputAppProps>(
  (
    {
      sizeOf = 'm',
      iconPos = 'left',
      icon,
      iconSize,
      className,
      background = 'background_700',
      error,
      ...props
    },
    ref
  ) => {
    return (
      <S.InputBox hasError={!!error} className={className}>
        {icon && (
          <S.InputIcon
            sizeOf={sizeOf}
            iconPos={iconPos}
            className="icon__float"
            iconSize={iconSize}
          >
            {icon}
          </S.InputIcon>
        )}
        <S.Input
          background={background}
          iconPos={iconPos}
          iconSize={iconSize}
          sizeOf={sizeOf}
          type="text"
          autoComplete="none"
          {...props}
          ref={ref}
        />
        {error && <S.InputError>{error}</S.InputError>}
      </S.InputBox>
    )
  }
)

export default Input
