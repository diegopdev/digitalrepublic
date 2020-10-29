import styled from 'styled-components'

export const WrapperServices = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  @media (max-width: 1025px) {
    justify-content: center;
  }
`

export const Wrapper = styled.section`
  margin: 5rem 0;
`
export const WrapperTitle = styled.div`
  margin: 3rem 0;

  @media (max-width: 1025px) {
    display: flex;
    align-items: center;
    justify-content: center;

    & h3 {
      text-align: center;
    }
  }
`
