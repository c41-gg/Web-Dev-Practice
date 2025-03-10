function Style() {
    const styles = css`
            font-family: Arial;
            font-size: 35px;
            text-align: center;
            color: palevioletred;
            `;
    const Title = styled.h1(styles)
    return(
        <div>
            <Title>Adding styles using CSS modules in ReactJS</Title>
        </div>
    )
}

export default Style