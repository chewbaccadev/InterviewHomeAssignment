import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../store/store';
import UserCard from '../UserCard/UserCard';
import {
  ButtonContainer,
  CardsContainer,
  CarouselWrapper,
} from './Carousel.style';
import { Button } from '../Button/Button';

const Carousel = () => {
  // get users from store
  const randomUsers = useSelector(
    (state: ReturnType<typeof store.getState>) => state?.users?.users
  );

  // current slide
  const [current, setCurrent] = useState(0);
  // slideshow active
  const [slideShow, setSlideShow] = useState(true);

  // Play/Pause button handler
  const clickHandler = () => {
    setSlideShow((prev) => !prev);
  };

  // slideshow logic
  useEffect(() => {
    if (slideShow && randomUsers.length !== 1) {
      const slideShowInterval = setInterval(() => {
        setCurrent((prev) => {
          if (prev >= randomUsers.length - 1) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 2000);
      return () => {
        clearInterval(slideShowInterval);
      };
    }
  }, [randomUsers, slideShow]);

  // reset everything if users change
  useEffect(() => {
    setCurrent(0);
    setSlideShow(true);
  }, [randomUsers]);

  // return empty state if no users were fetched
  if (randomUsers.length === 1 && randomUsers[0].name.title === 'empty') {
    return <></>;
  } else
    return (
      <CarouselWrapper>
        <CardsContainer $current={current}>
          {randomUsers.map((user) => {
            return (
              <UserCard
                title={user.name.title}
                firstName={user.name.first}
                lastName={user.name.last}
                image={user.picture.large}
                key={user.name.first + user.name.last}
              />
            );
          })}
        </CardsContainer>
        <ButtonContainer>
          <Button
            variant='primary'
            ariaLabel='Play/Pause'
            onClick={clickHandler}>
            Play/Pause
          </Button>
        </ButtonContainer>
      </CarouselWrapper>
    );
};

export default Carousel;
