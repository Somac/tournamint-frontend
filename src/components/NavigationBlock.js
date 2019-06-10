import React from 'react';

const LinkBlock = props => {
  const { href, name, action } = props
  return (
    <p><a className="nav-link" href={href} onClick={action}>{name}</a></p>
  )
}

const NavigationBlock = props => {
  const { links } = props;
  clickLink(id) = props.action(id);
  return (
    <div className="mx-auto d-flex justify-content-center">
      {links.map(link => {
        return <LinkBlock key={link.name} name={link.name} href={link.link} action={props.action(link.id)} />
      })}
    </div >
  );
};

export default NavigationBlock
