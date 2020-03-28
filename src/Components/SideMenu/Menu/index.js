import React from 'react';
import gsap from 'gsap';

import { MenuStyled } from './styles';
import MenuItem from '../MenuItem';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.userItem = React.createRef();
    this.briefCaseItem = React.createRef();
    this.graduationCapItem = React.createRef();
    this.folderOpenItem = React.createRef();
    this.phoneItem = React.createRef();
  }

  componentDidMount() {
    const tl = gsap.timeline();
    tl.set(this.userItem, { left: '-200%' });
    tl.set(this.briefCaseItem, { left: '-200%' });
    tl.set(this.graduationCapItem, { left: '-200%' });
    tl.set(this.folderOpenItem, { left: '-200%' });
    tl.set(this.phoneItem, { left: '-200%' });
    tl.fromTo(this.userItem, 0.4, { left: '-100%'}, { left: '0' });
    tl.fromTo(this.briefCaseItem, 0.4, { left: '-100%'}, { left: '0' });
    tl.fromTo(this.graduationCapItem, 0.4, { left: '-100%'}, { left: '0' });
    tl.fromTo(this.folderOpenItem, 0.4, { left: '-100%'}, { left: '0' });
    tl.resume();
  }

  render() {
    return (
      <MenuStyled>
        <div style={{ position: 'relative' }} ref={(elem) => { this.userItem = elem; }}>
          <MenuItem icon="user" option="Sobre" screenId="about" />
        </div>
        <div style={{ position: 'relative' }} ref={(elem) => { this.briefCaseItem = elem; }}>
          <MenuItem icon="briefcase" option="Experiência" screenId="experience" />
        </div>
        <div style={{ position: 'relative' }} ref={(elem) => { this.graduationCapItem = elem; }}>
          <MenuItem icon="graduation-cap" option="Habilidades" screenId="skills" />
        </div>
        <div style={{ position: 'relative' }} ref={(elem) => { this.folderOpenItem = elem; }}>
          <MenuItem icon="folder-open" option="Projetos" screenId="projects" />
        </div>
        <div style={{ position: 'relative' }} ref={(elem) => { this.phoneItem = elem; }}>
          <MenuItem icon="phone" option="Contato" screenId="contact" />
        </div>
      </MenuStyled>
    )
  }
}

export default Menu;
