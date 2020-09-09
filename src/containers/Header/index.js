import React from 'react';
import Nav from '@components/Header/Nav';
import Burger from '@components/Header/Burger';
import styles from './index.module.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeader: false
    }
  }

  onToggleHeaderHandler = () => {
    this.setState({showHeader: !this.state.showHeader})
  }

  render() {
    return (
      <header className={ `${styles.header} ${ this.state.showHeader ? styles.show : ''}` }>
        <div className={ styles.header__content }>
          <div className={ styles.header__title }>Navigation</div>
          <Nav  />
        </div>

        <Burger
          showHeader={ this.state.showHeader }
          onToggleHeader={ this.onToggleHeaderHandler }
        />
      </header>
    )
  }
}

export default Header;