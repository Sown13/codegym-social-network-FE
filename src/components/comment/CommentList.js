import "./CommentList.css";
import { useState } from "react";
import {Link} from "react-router-dom";

export default function CommentList({ item,likedComment ,handleToggleLikeComment}) {
    const [numShownComments, setNumShownComments] = useState(0);
    const [isHidden, setIsHidden] = useState(true);


    const handleClickShowMore = () => {
        setNumShownComments(numShownComments + 10);
    };

    const handleClickHideAll = () => {
        setNumShownComments(0);
        setIsHidden(true);
    };

    const visibleComments = item.commentList.slice(0, numShownComments);

    if (item.commentList.length === 0) {
        return <p style={{ marginLeft: "10px",fontSize:"14px" }}>Chưa có bình luận nào</p>;
    }

    return (
        <div>
            <div>
                {visibleComments.map((comment) => (
                    <li key={comment.commentId}>
                        <div className="comment-container">
                            <div>
                                <div className="comment-container-avatar">
                                    <img src={comment.user.avatar} alt="avt" />
                                    <Link to={`/users/${comment.user.userId}`}>
                                        <h2>{comment.user.fullName}</h2>
                                    </Link>
                                </div>
                                <p>{comment.textContent}</p>
                            </div>
                            <div>
                                <span>{comment.commentReactionList.length}</span>
                                <button
                                    style={{ color: likedComment.includes(comment.commentId) ? "#ff4500" : "#808080" }}
                                    onClick={() => handleToggleLikeComment(comment.commentId)}
                                >
                                    {likedComment.includes(comment.commentId) ? "Bỏ thích" : "Thích"}
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </div>
            {isHidden ? (
                <div id="rest-comment">
                    {numShownComments < item.commentList.length ? (
                        <a id="show-all" onClick={() => {
                            setNumShownComments(10);
                            setIsHidden(false);
                        }}>
                            Xem bình luận ({item.commentList.length})
                        </a>
                    ) : null}
                </div>
            ) : (
                <div id="rest-comment">
                    {numShownComments < item.commentList.length ? (
                        <a id="show-more" onClick={handleClickShowMore}>
                            Xem thêm bình luận
                        </a>
                    ) : null}
                    <a id="hide-all" onClick={handleClickHideAll}>
                        Ẩn hết
                    </a>
                </div>
            )}
        </div>
    );
}