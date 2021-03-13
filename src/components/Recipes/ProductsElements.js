import styled from 'styled-components'

export const InfoContainer = styled.div `
    color: #333333;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606') }
    ;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
@media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1; 
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
 max-width: 540px;
 padding-top: 0;
 padding-bottom: 60px;
`;

export const TopLine= styled.p`
    color: #ffe11b;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
    @media screen and (max-width: 480px) {
        font-size:32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;



// import { FaAlignJustify, FaCentercode, FaColumns, FaFileExcel } from 'react-icons/fa';
// import styled from 'styled-components';

// export const ProductsContainer = styled.div`
//     width: 100vw;
//     min-height: 100vh;
//     padding: 5rem calc((100vw - 1300px) /2);
//     background: #333333;
//     color: #fff;
//     `

//     export const ProductWrapper = styled.div`
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: center;
//         margin: 0 auto;
//     `

//     export const ProductCard = styled.div`
//         margin: 0 2rem;
//         line-height: 2;
//         width: 300px;
//     `

//     export const ProductImg =styled.img`
//         height: 300px;
//         min-width: 300px;
//         max-width: 100%;
//         box-shadow: 8px 8px #333333;
//     `

//     export const ProductsHeading =styled.h1`
//         font-size: clamp(2rem, 2.5vw, 3rem);
//         text-align: center;
//         margin-bottom: 5rem;
//     `

//     export const ProductTitle = styled.h2`
//         font-weight: 400;
//         font-size: 1.5rem;
//     `

//     export const ProductInfo = styled.div`
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         padding: 2rem;
//         text-align: center;
//     `

//     export const ProductDesc = styled.p`
//         margin-bottom: 1rem;
//     `

//     export const ProductPrice = styled.p`
//         margin-bottom: 1rem;
//         font-size: 2rem;
//     `

//     export const ProductButton = styled.button`
//         font-size: 1rem;
//         padding: 1rem 4rem;
//         border: none;
//         background: #e31837;
//         color: #fff;
//         transition: 0.2 ease-out;
//         cursor: pointer;
//         color: #000;
//     `



