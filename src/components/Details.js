import styled from 'styled-components'

const Details = (props) => {
    return (
        <Container>
            <h2>Details</h2>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`

export default Details