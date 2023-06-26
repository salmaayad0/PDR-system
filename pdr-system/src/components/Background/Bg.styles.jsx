import styled from "styled-components";

export const BgImg = styled.div`
    min-height: 600px;
    width: 100%;
    background-image: url('/media/bg.webp');
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;

    &:after{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: var(--bgBlue); 
    }
`