import palette from "../palette";

export default {
    colorPrimary: {
        color: palette.common.white,
        '&$checked': {
            color: palette.common.white
        },
        '&:hover': {
            color: palette.common.white
        }

    },
    colorSecondary: {
        '&$checked': {
            color: palette.common.black
        },
        '&:hover': {
            color: palette.common.black
        }

    },

}