import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Grid = styled.div`
    max-width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 5vw;
    padding-right: 5vw;
    margin: 0 auto;
`;
export const Face = styled.div`
    width: 300px;
    height: 200px;
    transition: 0.5s;
`;
export const Face1 = styled(Face)`
    position: relative;
    background: #5db1ff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
`;
export const Face2 = styled(Face)`
    position: relative;
    background: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    transform: translateY(-100px);
`;
export const Face1Content = styled.div`
    opacity: 0.8;
    transition: 0.3s;
`;
export const ContentImg = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
`;
export const FaceH3 = styled.h3`
    margin: 10px 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
`;
export const Face2ContentP = styled.p`
    margin: 0;
    padding: 0;
`;
export const Face2ContentA = styled(Link)`
    margin: 15px 0 0;
    display:  inline-block;
    text-decoration: none;
    font-weight: 900;
    color: #333;
    padding: 5px;
    border: 1px solid #333;
    &:hover {
        background: #333;
        color: #fff;
    }
`;
export const Card = styled.div`
    position: relative;
    cursor: pointer;
    margin-left: 2vw;
    background: transparent;
    border: none !important;
    &:hover {
        ${Face1} {
            background: #0254a1;
            transform: translateY(0);
        }
        ${Face1Content} {
            opacity: 1;
        }
        ${Face2} {
            transform: translateY(0);
        }
    }
`;