import { Typography } from "@material-ui/core";
import palette from '../palette';

export default {
    root: {
        fontSize: Typography.body1,
        borderRadius: 0
    },
    outlined: {
        border: `2px solid ${palette.common.black}`,
        backgroundColor: palette.common.white
    },
    deleteIcon: {
        '&:hover': {
            color: palette.grey,
        }
    }
}




