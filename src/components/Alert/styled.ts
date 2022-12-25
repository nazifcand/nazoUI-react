import styled from 'styled-components';

interface StyledProps {
  color:
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'grey'
    | 'dark';
}

export const StyledAlert = styled.div<StyledProps>`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  line-height: 1.3;
  border-left: 4px solid rgb(${({ theme, color }) => theme.colors[color]});
  background-color: rgba(${({ theme, color }) => theme.colors[color]}, 0.25);

  & + & {
    margin-top: 1rem;
  }
`;
