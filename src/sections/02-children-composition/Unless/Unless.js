import { When } from '../When'

const Unless = ({ children, condition, otherwise = null }) => {
  return <When condition={!condition} otherwise={otherwise}>
    {children}
  </When>
}

export { Unless };
