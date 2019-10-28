import ReactSsrScript from '@react-ssr/express/script';

export const Layout = (props) => {
  const {
    children,
    script,
  } = props;

  return (
    <html lang="en">
      <head></head>
      <body>
        {children}
        <ReactSsrScript script={script} />
      </body>
    </html>
  );
};
