/**
 * <p> This is check browsr util to check browser name</p>
 *
 * @public
 * @function
 * @author Aman Harde
 * @since 1.0.0
 * @param {String} browserName - browserName to check current browser
 * @returns Boolean
 */

export default function checkBrowser(browserName) {
    if ((navigator.userAgent.indexOf(browserName) != -1)) {
        return true;
    };
    return false;
};