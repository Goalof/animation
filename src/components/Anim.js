import atomize from "@quarkly/atomize"; // Import the keyframes

import styled, { keyframes } from "styled-components"; // Create the keyframes

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    background-color: #ff4400;
  }
  50% {
    transform: rotate(180deg);
    background-color: #000000;
  }
  100% {
    transform: rotate(360deg);
    background-color: #ff4400;
  }
`; // Here we create a component that will rotate everything we pass in over two seconds

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  border-radius: 10px;
  font-size: 1.2rem;
  background: red;
`;
export default atomize(Rotate)({
	name: "Sdaasd",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "Sdaasd — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});