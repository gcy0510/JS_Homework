let root = document.documentElement;
let ans = document.createElement('div');
let out = document.createElement('ol');

function dom_traverse(node,parent_ol){
    let li = document.createElement('li');
    li.textContent = node.tagName;
    parent_ol.appendChild(li);
    let children = node.children;
    if (children.length) {
        let ol = document.createElement('ol');
        for (let i = 0; i < children.length; i++){
            dom_traverse(children[i], ol);
        }
        parent_ol.appendChild(ol);
    }
}

dom_traverse(root, out);
ans.appendChild(out);
document.body.appendChild(ans);