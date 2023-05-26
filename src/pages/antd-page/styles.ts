import styled from 'styled-components';


export const Form = styled.div`
  display: flex;
  flex-direction: column;
  // width: 500px;
  margin: auto;
  gap: 20px;
  input {
    border: 3px solid green;
    border-radius: 6px;
    outline: none;
    font-size: 20px;
    padding: 4px 8px;
    :focus {
      border: 3px solid red;
      background-color: rgba(242, 61, 61, 0.2);
    }
  }
`;

export const Scanner = styled.div`
// width: 600px;
height: 100px;
margin: 0 auto;
margin-bottom: 40px;
`;


export const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;
// .slider-container {
//   position: relative;
//   width: 100%;
//   height: 400px;
//   overflow: hidden;
// }
export const Images = styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
`;

//  .slider-images {
  // position: relative;
  // width: 100%;
  // height: 100%;
  // display: flex;
// }

export const Image = styled.div`
position: absolute;
top: 0;
left: 0;
width: 25%;
height: 100%;
transition: opacity 0.5s ease-in-out;
 .Image:nth-child(2) {
  left: 25%;
}
 .Image:nth-child(3) {
  left: 50%;
}
 .Image:nth-child(4) {
  left: 75%;
}
 .Image.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.Image {
 position: absolute;
 top: 0;
 left: 0;
 width: 25%;
 height: 100%;
 transition: opacity 0.5s ease-in-out;
}
`;


