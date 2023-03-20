import { socialLinks } from "../utils/constants";

const SocialLists = () => {
  return (
    <ul className='social-list'>
      {socialLinks.map((item) => {
        const { id, icon, url } = item;
        return (
          <li className='social-item' key={id}>
            <a href={url} className='social-link'>
              <ion-icon name={icon}></ion-icon>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLists;
