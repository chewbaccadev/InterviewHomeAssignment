import Carousel from '../components/Carousel/Carousel';
import { Input } from '../components/Input/Input';
import { PageWrapper } from './styles';

export const Home = () => {
  return (
    <PageWrapper>
      <Input />
      <Carousel />
    </PageWrapper>
  );
};
