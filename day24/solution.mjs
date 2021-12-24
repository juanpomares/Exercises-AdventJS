export default function checkIsSameTree(treeA, treeB) {
  if(treeA!=null && treeB!=null)
  {
    let nodesA=[];
    createNodeTree(treeA, nodesA);
    let nodesB=[];
    createNodeTree(treeB, nodesB);

    return JSON.stringify(nodesA)==JSON.stringify(nodesB);
  }
  
  return false
}

function createNodeTree(tree, nodes)
{
  //if(tree!=null)
  //{
    if(tree.left!=null)
      createNodeTree(tree.left, nodes);

    nodes.push(tree.value);

    if(tree.right!=null)
      createNodeTree(tree.right, nodes);
  //}
}
