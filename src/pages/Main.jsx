import styled from "styled-components";
import Tab from "../components/Tab";
import Header from "../components/Header";

const Container = styled.div`
    display: flex;
    width: 100%;    
    margin-left: 15px;
    margin-right: 15px;
    background-color: #E9F9FA;
    overflow:auto;
    border: 3px solid #FF1493;
`;

const Page = styled.div`
    width: 63.8125rem;
    height: 35.5625rem;
    flex-shrink: 0;
    display: flex;
    margin: 130px 425px 0px 425px;
    border: 3px solid black;
`;
const Circle = styled.div`
    background-color: #006CBF;
    width: 15.5625rem;
    height: 15.5625rem;
    flex-shrink: 0;
    border-radius: 18.75rem;
    color: #FFF;
    text-align: right;
    font-family: Oleo Script;
    font-size: 4.375rem;
    font-style: italic; 
    font-weight: 1000; 
`;
const KNU = styled.div`
    color: black;
    text-align: right;
    font-family: Oleo Script;
    font-size: 4.375rem;
    font-style: italic; 
    font-weight: 1000; 
`;
const Text = styled.div`
    color: #54A9EA;
    text-align: left;
    font-family: Oleo Script;
    font-size: 2.25rem;    
    font-style: italic; 
    font-weight: 600; 
`;
const Content = styled.div`
    background-color: #006CBF;
`;

const Promotion = styled.img`
    width: 672px;
    height: 465px;
    border-radius: 4.8125rem; 
    margin: 82px 2000px 36px 130px;
   
`;


function Main() {
    return (
        <Container>
            <Header />
            <Page>
                <Circle>
                    KNU
                    <KNU>KNU</KNU>
                </Circle>
                <Text>
                    This site that 
                    provides information 
                    desired by
                    KNU students
                </Text>
                <Promotion src="img/knu_view.webp" />
            </Page>
            <Content>
                
                <Tab left={'단과대별'} right={'분야별'}/>
                <div>
                    Hot Program
                </div>
                <div>
                    Calender
                </div>
                <Tab left={'학식 식단표'} right={'달구지 시간표'}/>
                <div>
                    Footer
                </div>
            </Content>
        </Container>
    );
}

export default Main;