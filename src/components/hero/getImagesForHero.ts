import HeroImage0 from '../../../public/images/hero.jpg';
import HeroImage1 from '../../../public/images/hero1.jpg';
import HeroImage2 from '../../../public/images/hero2.jpg';
import HeroImage3 from '../../../public/images/hero3.jpg';
import HeroImage4 from '../../../public/images/hero4.jpg';
import HeroImage5 from '../../../public/images/hero5.jpg';
import HeroImage6 from '../../../public/images/hero6.jpg';
import HeroImage7 from '../../../public/images/hero7.jpg';
import HeroImage8 from '../../../public/images/hero8.jpg';
import HeroImage9 from '../../../public/images/hero9.jpg';
import HeroImage10 from '../../../public/images/hero10.jpg';
import HeroImage11 from '../../../public/images/hero11.jpg';
import HeroImage12 from '../../../public/images/hero12.jpg';
import HeroImage13 from '../../../public/images/hero13.jpg';
import HeroImage14 from '../../../public/images/hero14.jpg';

const images = [HeroImage0, HeroImage1, HeroImage2,
    HeroImage3, HeroImage4, HeroImage5, HeroImage6,
    HeroImage7, HeroImage8, HeroImage9, HeroImage10,
    HeroImage11, HeroImage12, HeroImage13, HeroImage14
]

export const getRandomHeroImage = () => {
    const getRndInteger = (max=images.length-1) => {
        return Math.floor(Math.random() * (max));
    }

    return images[getRndInteger()]
}