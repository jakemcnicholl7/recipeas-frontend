
export default class UtilsRenderer {

    static sanitiseJSONInput(string) {
        string = string.replaceAll("\"", "\\\"");
        string = string.replaceAll(/([\s\[,])'/g, "$1\"");
        string = string.replaceAll(/'([\s\])},])/g, "\"$1");
        return string;
    }

    static stringToArray(string) {
        string = UtilsRenderer.sanitiseJSONInput(string);
        return JSON.parse(string);
    }

    static renderList(array) {
        let list = document.createElement("ol");
        for (let element of array) {
            let item = document.createElement("li");
            item.textContent = element;
            list.appendChild(item);
        }
        return list
    }
}