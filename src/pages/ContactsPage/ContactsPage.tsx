import classes from './ContactsPage.module.scss';

import { Back } from '../../components/Back';
import linkedin from './linkedin-icon.png';
import telegram from './telegram-icon.png';
import github from './github-icon.png';
import gmail from './gmail-icon.png';
import { developers } from '../../constants/developers';

export const ContactsPage = () => {
  return (
    <div className={classes.contactsPage}>
      <div className={classes.backWrap}>
        <Back />
      </div>
      <div className={classes.contactsAndTitleWrap}>
        <div className={classes.titleWrap}>
          <h1 className={classes.contactsTitle}>Contacts</h1>
        </div>

        <div className={classes.contentWrap}>
          <div className={classes.contactsWrap}>
            <h2 className={classes.teamName}>Developers team</h2>
            <div className={classes.breakLine} />
            {developers.map((developer) => (
              <>
                <div className={classes.teammate}>
                  <h3 className={classes.name}>{developer.name}</h3>
                  <div className={classes.wrap}>
                    <a
                      href={developer.telegram}
                      className={classes.linkWrap}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={telegram} alt="telegram logo" />
                    </a>
                    <a
                      href={developer.lindedin}
                      className={classes.linkWrap}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={github} alt="linkedIn logo" />
                    </a>
                    <a
                      href={developer.lindedin}
                      className={classes.linkWrap}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={linkedin} alt="linkedIn logo" />
                    </a>
                    <a
                      href={developer.lindedin}
                      className={classes.linkWrap}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={gmail} alt="linkedIn logo" />
                    </a>
                  </div>
                </div>
                {developer.id !== developers.length && (
                  <div className={classes.breakLine} />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
