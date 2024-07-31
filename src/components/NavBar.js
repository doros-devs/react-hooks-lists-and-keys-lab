import React from "react";

function NavBar() {
  const links = [
    { text: "home", href: "#home" },
    { text: "about", href: "#about" },
    { text: "projects", href: "#projects" },
  ];

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={link.href}>
          {link.text}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
