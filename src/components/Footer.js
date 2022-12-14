import styled from "styled-components";

export default function Footer(props) {
    return (
        <Description data-test="footer">
            <img src={props.img} alt="Imagem" />
            <p>
                {props.title}
                {props.showtime ? (
                    <>
                        <br />
                        {props.showtime}
                    </>
                ) : null}
            </p>
        </Description>
    );
}

const Description = styled.footer`
    display: flex;
    width: 100%;
    height: 117px;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 10px;
    box-sizing: border-box;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    img {
        width: 64px;
        height: 89px;
        padding: 9px;
        box-sizing: border-box;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    };
    p {
        display: flex;
        align-items: center;
        margin-left: 14px;
        font-family: 'Roboto';
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
        color: #293845;
    };
`