export default function getPageArray(totalPages) {
    let pageArray = [];
    for (let i = 0; i < totalPages; i++) {
        pageArray.push(i + 1);
    }
    return pageArray;
};
