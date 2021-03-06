import { Component } from 'react';

class RenderPropsForIsSelected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  toggleIsSelected = () => {
    this.setState(prevState => ({ isSelected: !prevState.isSelected }));
  };

  render() {
    const { isSelected } = this.state;
    const { children } = this.props;

    return children({
      isSelected,
      toggleIsSelected: this.toggleIsSelected,
    });
  }
}

export default RenderPropsForIsSelected;
