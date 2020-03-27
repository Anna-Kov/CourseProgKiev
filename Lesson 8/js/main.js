const createNewChild = () => {
    const list = document.getElementById('list');
    const item = document.createElement('div');
    item.innerHTML = 'Ever text';
    list.appendChild(item);
}
const removeLastChild = () => {
    const node = document.getElementById('list');
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}