import React from 'react';
//import Nav from './Nav';
import styles from './index.module.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    }
  }

  onToggleMenuHandler = () => {
    this.setState({showMenu: !this.state.showMenu})
  }

  render() {
    return (
      <header className={ styles.header }>
        {/*<Nav*/}
        {/*  showMenu={ this.state.showMenu }*/}
        {/*  onToggleMenu={ this.onToggleMenuHandler }*/}
        {/*/>*/}
        <Nav />
      </header>
    )
  }
}

export default Header;