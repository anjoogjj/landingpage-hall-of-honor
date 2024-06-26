import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => {

  const onClickButton = () => {
    window.open('https://forms.gle/5p4uTNcT3ZBK4b9K7')
  }

  return (
    <header className={tw(headerStyle)}>
      <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
        <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
          우리 팀을 위대하게.
        </h1>
        <div className={tw(`max-w-xl mx-auto`)}>
          <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
            그저 기록하세요. 그리고 우리 팀만의 명예의 전당을 만들어가세요.
          </p>
        </div>
        <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
          <Button primary onClick={onClickButton}>서비스 신청하기</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
