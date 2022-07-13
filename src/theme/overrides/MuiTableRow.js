import { colors, lighten } from '@material-ui/core';
import palette from '../palette';

export default {

  root: {
    '&$selected': {
      backgroundColor: lighten(colors.pink[500], 0.85)
    },
    '&$selected:hover': {
      backgroundColor: 'rgba(220, 0, 78, 0.08)'/* lighten(colors.pink[500], 0.85) */
    }
  }


};
