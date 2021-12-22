export default function countDecorations(bigTree)
 {
   let val=bigTree.value;
   if(bigTree.left!=null)
     val+=countDecorations(bigTree.left);

   if(bigTree.right!=null)
     val+=countDecorations(bigTree.right);

  return val;
}
