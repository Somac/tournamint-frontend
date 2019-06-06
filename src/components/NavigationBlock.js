import React from 'react';

const LinkBlock = props => {
  const { href, name } = props
  return (
    <li className="nav-item">
      <a className="nav-link active" href={href}>{name}</a>
    </li>
  )
}

const NavigationBlock = props => {
  const { links } = props;
  console.log(links)
  return (
    <ul className="nav">
      {links.map(link => {
        return <LinkBlock key={link.name} name={link.name} href={link.link} />
      })}
    </ul>
  );
};

export default NavigationBlock
