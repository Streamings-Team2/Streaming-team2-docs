import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Facil de usuar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Diseñado desde cero para ser fácilmente instalado, intuitivo para 
        gestionar la informacion de vuelos y con estructura minimalista
      </>
    ),
  },
  {
    title: 'Enfocado a operadores',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Aplicacion enfocado a la gestion de las actividades de los operadores 
      </>
    ),
  },
  {
    title: 'Desarrollado modular',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Posibilita que diferentes partes de la aplicación se desplieguen de manera autónoma
        agiliza el ciclo de actualizaciones y mejora la disponibilidad
      </>
    ),
  },
];

const Integrantes: FeatureItem[] = [
  {
    title: 'Andres Camilo Forero Amaya',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Desarrollador
      </>
    ),
  },
  {
    title: 'Sebastian Sanabria Garcia',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Desarrollador
      </>
    ),
  },
  {
    title: 'Nicolas Cifuentes Barriga',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Desarrollador
      </>
    ),
  },
  {
    title: 'Sebastian Lobo Guerrero',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Desarrollador
      </>
    ),
  },
  {
    title: 'Frans David Aguirre Rueda',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Desarrollador
      </>
    ),
  },
  {
    title: 'Gloria Marcela Carmona',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Desarrolladora
      </>
    ),
  },
  {
    title: 'Brayan Sneyder Alvarez Valencia',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Desarrollador
      </>
    ),
  },
  {
    title: 'Yaneth Xiomara Rojas Ramirez',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Desarrolladora
      </>
    ),
  },
  
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <Heading as="h2" className="text--center">
        Streamings-Team2
      </Heading>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {Integrantes.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
