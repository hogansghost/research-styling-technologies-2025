import { Input } from '@mui/material';
import { useToggleDisabledState } from '../hooks/useToggleDisabledState/useToggleDisabledState';
import { Button } from './components/Button/Button';
import { ButtonGroup } from './components/ButtonGroup/ButtonGroup';
import { Card } from './components/Card/Card';
import { Link } from './components/Link/Link';
import { Placeholder } from './components/Placeholder/Placeholder';
import { Title } from './components/Title/Title';
import { cardContent, placeholderCardGrid, placeholderWrappingGrid, section } from './PigmentCSS.styles';

import '@pigment-css/react/styles.css';

export const PigmentCSS = () => {
  const [isDisabled, toggleIsDisabled] = useToggleDisabledState();

  return (
    <Card>
      <Card.Header>
        <Title size="sm">Card header title</Title>
      </Card.Header>

      <Card.Body>
        <div className={cardContent}>
          <section>
            <p style={{ fontStyle: 'italic' }}>
              Note, this was originally written when the Pigment version was 0.0.3, so the approaches here are probably
              outdated (being able to set variables etc. probably works now and is documented. However, there seems to
              be an issue with vite and pigment vite plugin that doesn't allow it to build, so we're currently stuck on
              the older version of the vite plugin.)
            </p>

            <br />

            <p>
              You can read the documentation for this library at the following{' '}
              {/* @ts-expect-error I am not wasting time debugging why "href" is apparently not an anchor prop... */}
              <Link href="https://github.com/mui/material-ui/tree/master/packages/pigment-css-react#getting-started">
                Documentation link
              </Link>
              .
            </p>
          </section>

          <section className={section}>
            <p>
              This is an example of a MUI component styled via the theme object, it will be consistent throughout all
              the examples as we are globally styling this MUI component rather than creating an abstraction layer to
              customise it.
            </p>

            <br />

            <Input value="Some fixed value" />
          </section>

          <div className={placeholderWrappingGrid}>
            <div className={placeholderCardGrid}>
              <Placeholder />
              <Placeholder />
              <Placeholder />
              <Placeholder />
              <Placeholder />
              <Placeholder />
            </div>

            <div className={placeholderCardGrid}>
              <Placeholder variant="secondary" />
              <Placeholder variant="secondary" />
              <Placeholder variant="secondary" />
              <Placeholder variant="secondary" />
              <Placeholder variant="secondary" />
              <Placeholder variant="secondary" />
            </div>
          </div>

          <section>
            <p>
              Below are examples of some custom buttons, showcasing different sizes (which effect the padding of the
              buttons) as well as a disabled state that is toggled via the first button in the list.
            </p>
          </section>

          <ButtonGroup alignment="start">
            <Button onClick={toggleIsDisabled}>Toggle disabled state of Sibling Button</Button>

            <Button isDisabled={isDisabled}>Sibling Button</Button>
            <Button size="large" isDisabled={isDisabled}>
              Sibling Button
            </Button>
          </ButtonGroup>
        </div>
      </Card.Body>
    </Card>
  );
};
