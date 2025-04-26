import * as stylex from '@stylexjs/stylex';
import { Input } from '@mui/material';
import { useToggleDisabledState } from '../hooks/useToggleDisabledState/useToggleDisabledState';
import { Button } from './components/Button/Button';
import { ButtonGroup } from './components/ButtonGroup/ButtonGroup';
import { Card } from './components/Card/Card';
import { Link } from './components/Link/Link';
import { Placeholder } from './components/Placeholder/Placeholder';
import { Title } from './components/Title/Title';
import { styles } from './StyleX.styles';

export const StyleX = () => {
  const [isDisabled, toggleIsDisabled] = useToggleDisabledState();

  return (
    <Card>
      <Card.Header>
        <Title size="sm">Card header title</Title>
      </Card.Header>

      <Card.Body>
        <div {...stylex.props(styles.cardContent)}>
          <section>
            <p>
              {' '}
              You can read the documentation for this library at the following{' '}
              {/* @ts-expect-error I am not wasting time debugging why "href" is apparently not an anchor prop... */}
              <Link href="https://stylexjs.com/docs/learn/">Documentation link</Link>.
            </p>
          </section>

          <section {...stylex.props(styles.section)}>
            <p>
              This is an example of a MUI component styled via the theme object, it will be consistent throughout all
              the examples as we are globally styling this MUI component rather than creating an abstraction layer to
              customise it.
            </p>

            <br />

            <Input value="Some fixed value" />
          </section>

          <div {...stylex.props(styles.placeholderWrappingGrid)}>
            <div {...stylex.props(styles.placeholderCardGrid)}>
              <Placeholder />
              <Placeholder />
              <Placeholder />
              <Placeholder />
              <Placeholder />
              <Placeholder />
            </div>

            <div {...stylex.props(styles.placeholderCardGrid)}>
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
