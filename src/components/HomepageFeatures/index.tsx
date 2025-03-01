import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: ReactNode;
  picture: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>Einfach zu benutzen</Translate>,
    picture: require('@site/static/img/easy_to_use.webp').default,
    description: (
      <Translate>
        eLiSCHe macht das erzeugen von komplexen embedded Linux Systemimages einfach.
      </Translate>
    ),
  },
  {
    title: <Translate>Fokus auf das Wesentliche</Translate>,
    picture: require('@site/static/img/focus.webp').default,
    description: (
      <Translate>
        eLiSCHe reduziert die Komplexität bei der Entwicklung von embedded Linux Systemen auf ein Minimum.
      </Translate>
    ),
  },
  {
    title: <Translate>Wissensdatenbank</Translate>,
    picture: require('@site/static/img/study.webp').default,
    description: (
      <Translate>
        eLiSCHe bietet eine Wissensdatenbank mit gebräuchlichen Lösungen und beschreibt nicht nur das "Wie" sondern auch das "Warum".
      </Translate>
    ),
  },
];

function Feature({title, picture, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={picture} width="50%" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
