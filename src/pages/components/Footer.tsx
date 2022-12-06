import React from 'react';
import tw, { styled, css, theme } from 'twin.macro';

const StyledFooter = styled.div(() => [
  tw`h-40`,
  css`
    background-color: ${theme`colors.drakgray`};
  `,
]);
const Foo = () => (
  <StyledFooter>
    footer
    {/* <div>footer</div> */}
  </StyledFooter>
);

export default Foo;
