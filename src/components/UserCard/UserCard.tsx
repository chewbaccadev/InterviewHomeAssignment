import {
  CardWrapper,
  StyledImage,
  StyledName,
  StyledTitle,
} from './UserCard.style';

interface Props {
  image: string;
  title: string;
  firstName: string;
  lastName: string;
}

const UserCard = ({ image, title, firstName, lastName }: Props) => {
  return (
    <CardWrapper>
      <StyledImage src={image} alt={`Portrait of ${firstName} ${lastName}`} />
      <StyledTitle>{title}</StyledTitle>
      <StyledName>{`${firstName} ${lastName}`}</StyledName>
    </CardWrapper>
  );
};

export default UserCard;
