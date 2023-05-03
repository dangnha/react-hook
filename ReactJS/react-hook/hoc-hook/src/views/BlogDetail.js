import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";

const BlogDetail = () => {
  let { id } = useParams();
  let history = useHistory();
  const handleBack = () => {
    history.goBack();
  };

  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const {
    dataOutput: dataBlogDetail,
    isLoading,
    isErr,
    message,
  } = useFetch(url, false);

  return (
    <div>
      {isLoading === true && dataBlogDetail && (
        <div className="Blog-details">
          <h1>Blog Detail</h1>
          <div key={dataBlogDetail.id} className="Blog-items-child">
            <div className="Blog-name">
              {dataBlogDetail.id} - {dataBlogDetail.title}
            </div>
            <div className="Blog-description">{dataBlogDetail.body}</div>
          </div>
          <button onClick={() => handleBack()}>Back</button>
        </div>
      )}
    </div>
  );
};
export default BlogDetail;
