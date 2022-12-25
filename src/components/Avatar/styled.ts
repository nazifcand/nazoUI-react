import styled from 'styled-components';

interface StyleProps {
  size: 'xsmall' | 'small' | 'medium' | 'large';
  color:
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'grey'
    | 'dark';
  rounded: boolean;
  circle: boolean;
}

export const StyledAvatar = styled.div<StyleProps>`
  width: calc(${({ size, theme }) => theme.sizes[size]} * 2);
  height: calc(${({ size, theme }) => theme.sizes[size]} * 2);
  background-color: rgb(${({ color, theme }) => theme.colors[color]});
  color: rgb(
    ${({ color, theme }) =>
      color != 'grey' ? '255,255,255' : theme.colors.color}
  );
  overflow: hidden;
  box-sizing: border-box;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitionDelay} transform ease;

  img {
    width: 100%;
    height: 100%;
  }

  ${({ circle }) => circle && `border-radius:100%;`}
  ${({ rounded }) => rounded && `border-radius: .5rem;`}
`;
