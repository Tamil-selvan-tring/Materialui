function del(e)
{
  let di=document.getElementById('card');
  let chld=document.getElementById(e);
  di.removeChild(chld);
}
export default del;