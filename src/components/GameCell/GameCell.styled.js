import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  width: 10rem;
  height: 10rem;
  border: none;
  border-radius: 2.5rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.cream};
  cursor: pointer;
  padding: 1rem;

  display: flex; /* ✅ centers children */
  align-items: center;
  justify-content: center;
/* 

  ${(props) => props.theme.media.mobile} {
 font-size: 3rem;
  width: 8rem;
  height: 8rem;
  border: none;
  border-radius: 2rem;
   cursor: pointer;

  } */

/* 
.o-icon{
   width: 100%;
  height: 100%;
}  */

  .markedItem {
    path {
      fill: ${(props) => props.theme.colors.primary};
    }

  }

  .outlineIcon {
    path {
      stroke: ${(props) => props.theme.colors.primary};
      stroke-width: 0;
    }
  }

  &:hover {
    .outlineIcon {
      path {
        stroke-width: 2;
      }
    }
  }
`;
