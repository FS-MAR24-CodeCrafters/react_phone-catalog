import { Back } from '../../components/Back';
import { developers } from '../../constants/developers';
import linkedin from '../../img/social/linkedin-icon.png';
import telegram from '../../img/social/telegram-icon.png';
import github from '../../img/social/github-icon.png';
import gmail from '../../img/social/gmail-icon.png';
import classes from './ContactsPage.module.scss';

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
                      href={developer.github}
                      className={classes.linkWrap}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={github} alt="gitHub logo" />
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
                      href={developer.email}
                      className={classes.linkWrap}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={gmail} alt="gMail logo" />
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
