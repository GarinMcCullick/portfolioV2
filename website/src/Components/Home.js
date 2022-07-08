import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #aa4b6b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3b8d99,
    #6b6b83,
    #aa4b6b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #3b8d99,
    #6b6b83,
    #aa4b6b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const H1 = styled.h1`
  font-size: 40px;
  line-height: 70px;
  padding: 127px 20px 0 160px;
`;

const Pic = styled.div`
  position: fixed;
  width: 300px;
  height: 400px;
  top: 0;
  right: 0;
  margin-right: 300px;
  margin-top: 200px;
  background-image: url(/imgs/Me2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2),
    0px 0px 6px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2),
    0px 0px 6px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2), 0px 0px 6px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2), 0px 0px 6px rgba(0, 0, 0, 0.2);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2), 0px 0px 6px rgba(0, 0, 0, 0.2);
`;

const P = styled.p`
  margin: 0 0 30px 0;
`;

function Home() {
  return (
    <Container>
      <Pic></Pic>
      <H1>Hello, my name is Garin</H1>
      <P>
        A front end web developer with over 4,000 coding hours across an array
        of languages and libraries. Mainly I work in
        Javascript/React/HTML5/CSS3. I love meeting new and creative people!
      </P>
    </Container>
  );
}

export default Home;
