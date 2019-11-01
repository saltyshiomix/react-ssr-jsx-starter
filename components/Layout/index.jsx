export const Layout = (props) => {
  return (
    <html lang="en">
      <head>
        <title>react-ssr-jsx-starter</title>
        <meta charSet="utf-8" />
      </head>
      <body>
        {props.children}
      </body>
    </html>
  );
};
