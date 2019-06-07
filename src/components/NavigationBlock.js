import React from 'react';

const LinkBlock = props => {
  const { href, name, active } = props
  return (
    <p><a className="nav-link" href={href}>{name}</a></p>
  )
}

const NavigationBlock = props => {
  const { links } = props;
  console.log(links)
  return (
    <div className="mx-auto d-flex justify-content-center">
      {links.map(link => {
        return <LinkBlock key={link.name} name={link.name} href={link.link} />
      })}
    </div >
  );
};

export default NavigationBlock
