import styled from 'styled-components/macro'

export const Base = styled.div`
  min-height: 100vh;
  min-width: 100%;
  background-color: grey;
`

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: blue;
  align-items: center;
  padding: 0 80px;
`

export const NavContainer = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`