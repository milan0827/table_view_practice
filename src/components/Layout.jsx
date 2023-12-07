function Layout({ closedialog }) {
  return (
    <span onClick={closedialog} className="overlay  absolute inset-0 "></span>
  );
}

export default Layout;
