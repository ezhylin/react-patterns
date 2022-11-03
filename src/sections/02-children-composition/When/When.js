const When = ({ children, condition, otherwise = null }) => {
  return condition ? children : otherwise
};

export { When };
