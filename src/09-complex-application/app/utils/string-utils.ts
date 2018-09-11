export class StringUtils {
    static cutString(inputString: string, maxLength: number = 255) {
        const SEPARATOR = ' ';
        if(inputString.length<=maxLength) return inputString;
        return inputString.substr(0,inputString.lastIndexOf(SEPARATOR,maxLength));
    }
}