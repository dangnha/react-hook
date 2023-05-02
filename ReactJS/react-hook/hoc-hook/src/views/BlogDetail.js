import { useParams } from "react-router-dom";

const BlogDetail = () => {
  let { id } = useParams();
  return <div>Hi with id = {id}</div>;
};
export default BlogDetail;
