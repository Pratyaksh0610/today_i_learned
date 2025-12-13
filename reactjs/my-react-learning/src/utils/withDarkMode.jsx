const withDarkMode = (Component) => {
  const styles = {
    background: "blue",
    color: "red",
  };
  return function (props) {
    return (
      <div style={styles}>
        <Component {...props} />
      </div>
    );
  };
};

export default withDarkMode;
