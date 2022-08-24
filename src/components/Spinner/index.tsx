import { useTheme } from '../../context/ThemeContext';

import { StyledSpinner } from './styles';

function Spinner() {
  const { theme } = useTheme();

  return <StyledSpinner theme={theme}/>;
}

export default Spinner;

