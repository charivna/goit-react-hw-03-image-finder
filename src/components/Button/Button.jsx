import { Component } from 'react';
import { ButtonMore } from './Button.styled';

export class Button extends Component {
  render() {
    return (
      <ButtonMore type="button" onClick={this.props.onClick}>
        Load more
      </ButtonMore>
    );
  }
}
