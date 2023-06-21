import styled from "styled-components";

export const UserMood = styled.div`
  height: 300px;
  width: 300px;
  border: 1px solid var(--yellow);
  box-shadow: 3px 2px 7px 2px rgba(242, 174, 199, 0.5);
  border-radius: 30%;
  background-color: var(--purple);
  position: relative;
  top: 120px;
  left: ${ props => (
    props.varient === "patient" 
  ? "150px" 
  : "170px"
  )};
  transition: all 1s ease-in-out;
  z-index: 3;

  &:hover {
    border: 1px solid var(--orange);
    box-shadow: 7px 5px 9px 3px rgba(242, 174, 199, 0.7);
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-image: ${ props =>
      props.varient === "patient"
        ? 'url("/media/patient.png")'
        : 'url("/media/doc.png")'};
    background-repeat: no-repeat;
    object-fit: contain;
    z-index: 4;
  }
`;
