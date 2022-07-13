import checkBrowser from "../../_utils/checkBrowser"

export default {
    root: {
        minWidth: checkBrowser("Chrome") ? 'fill-available' : '-moz-available',
        maxWidth: 'fit-content'
    }
}