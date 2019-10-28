import ReactSsrScript from '@react-ssr/express/script';

export const Layout = (props) => {
  const {
    children,
    script,
  } = props;

  return (
    <html lang="en">
      <head>
        <title>react-ssr-jsx-starter</title>
      </head>
      <body>
        {children}
        <ReactSsrScript script={script} />
      </body>
    </html>
  );
};
