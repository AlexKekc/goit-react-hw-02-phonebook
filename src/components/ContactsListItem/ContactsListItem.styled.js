import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.big};
  background-color: ${p => p.theme.colors.white};
  list-style: georgian;

  & + li {
    margin-top: ${p => p.theme.space[3]}px;
  }
`;

export const ContactData = styled.span`
  border-radius: ${p => p.theme.radii.round};
`;

export const DeleteBtn = styled.button`
  width: 80px;
  margin-left: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
