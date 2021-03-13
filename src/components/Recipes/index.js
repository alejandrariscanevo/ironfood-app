import React from 'react';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from '../Products/ProductsElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2, href}) => {
    return (
            
        <>
         <InfoContainer lightBg={lightBg} id={id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading> 
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                {/* <Button to={href}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >
                                {buttonLabel}</Button> */}
                            </BtnWrap>
                        </TextWrapper>
                     </Column1>
                     <Column2>
                         <ImgWrap>
                             <Img src={img} alt={alt}/>
                         </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
         </InfoContainer>   
        </>
    );
};

export default InfoSection;


// import React from 'react'
// import { ProductsContainer, ProductWrapper, ProductsHeading, ProductTitle, ProductCard, ProductImg, ProductInfo, ProductDesc, ProductPrice, ProductButton } from './ProductsElements'

// const Products = ({ heading, data }) => {
//     return (
//         <ProductsContainer>
//             <ProductsHeading>{heading}</ProductsHeading>
//             <ProductWrapper>
//                 {data.map((product, index) => {
//                     return (
//                         <ProductCard key={index}>
//                             <ProductImg src={product.img} alt={product.alt} />
//                             <ProductInfo>
//                                 <ProductTitle>{product.name}</ProductTitle>
//                                 <ProductDesc>{product.desc}</ProductDesc>
//                                 <ProductPrice>{product.price}</ProductPrice>
//                                 <ProductButton>{product.button}</ProductButton>
//                             </ProductInfo>

//                         </ProductCard>
//                     )
//                 })}
//             </ProductWrapper>
//         </ProductsContainer>
//     )
// }

// export default Products
