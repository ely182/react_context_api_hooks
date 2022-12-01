import P from 'prop-Types';

export const Button = ({children,onButtonClick}) => {
  return <button style={{fontSize: '60px'}} onclick={onButtonClick}>{children}</button>;
  
};

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired
}