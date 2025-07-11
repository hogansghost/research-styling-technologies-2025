import { Input } from '@mui/material';
import { useToggleDisabledState } from '../hooks/useToggleDisabledState/useToggleDisabledState';
import {
  StyledComponentsCardContent,
  StyledPlaceholderGrid,
  StyledPlaceholderGridMediaQueryExample,
  StyledSection,
} from './StyledComponents.styles';
import { Button } from './components/Button/Button';
import { ButtonGroup } from './components/ButtonGroup/ButtonGroup';
import { Card } from './components/Card/Card';
import { Link } from './components/Link/Link';
import { Placeholder } from './components/Placeholder/Placeholder';
import { Title } from './components/Title/Title';

export const StyledComponents = () => {
  const [isDisabled, toggleIsDisabled] = useToggleDisabledState();

  return (
    <Card>
      <Card.Header>
        <Title size="sm">Card header title</Title>
      </Card.Header>

      <Card.Body>
        <StyledComponentsCardContent>
          <section>
            <p>
              {' '}
              You can read the documentation for this library at the following{' '}
              {/* @ts-expect-error I am not wasting time debugging why "href" is apparently not an anchor prop... */}
              <Link href="https://styled-components.com/docs">Documentation link</Link>.
            </p>
          </section>

          <StyledSection>
            <p>
              This is an example of a MUI component styled via the theme object, it will be consistent throughout all
              the examples as we are globally styling this MUI component rather than creating an abstraction layer to
              customise it.
            </p>

            <br />

            <Input value="Some fixed value" />
          </StyledSection>

          <StyledPlaceholderGridMediaQueryExample>
            <StyledPlaceholderGrid>
              <Placeholder />
              <Placeholder />
              <Placeholder />
              <Placeholder />
              <Placeholder />
              <Placeholder />
            </StyledPlaceholderGrid>

            <StyledPlaceholderGrid>
              <Placeholder variant="secondary" />
              <Placeholder variant="secondary" />
              <Placeholder variant="secondary" />
              <Placeholder variant="secondary" />
              <Placeholder variant="secondary" />
              <Placeholder variant="secondary" />
            </StyledPlaceholderGrid>
          </StyledPlaceholderGridMediaQueryExample>

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
        </StyledComponentsCardContent>
      </Card.Body>
    </Card>
  );
};
