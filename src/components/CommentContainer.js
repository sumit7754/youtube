import { faHand, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { generateRandomMessage, generateRandomName } from '../utils/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CommentData = [
  {
    name: 'sumit',
    text: 'lorem epsum solor size sit amt',
    likes: 0,
    disLikes: 0,
    replies: [
      {
        name: 'sumit',
        text: 'lorem epsum solor size sit amt',
        likes: 0,
        disLikes: 0,
        replies: [],
      },
      {
        name: 'sumit',
        text: 'lorem epsum solor size sit amt',
        likes: 0,
        disLikes: 0,

        replies: [],
      },
      {
        name: 'sumit',
        text: 'lorem epsum solor size sit amt',
        likes: 0,
        disLikes: 0,
        replies: [
          {
            name: 'sumit',
            text: 'lorem epsum solor size sit amt',
            likes: 0,
            disLikes: 0,
            replies: [
              {
                name: 'sumit',
                text: 'lorem epsum solor size sit amt',
                likes: 0,
                disLikes: 0,
                replies: [
                  {
                    name: 'sumit',
                    text: 'lorem epsum solor size sit amt',
                    likes: 0,
                    disLikes: 0,
                    replies: [
                      {
                        name: 'sumit',
                        text: 'lorem epsum solor size sit amt',
                        likes: 0,
                        disLikes: 0,
                        replies: [
                          {
                            name: 'sumit',
                            text: 'lorem epsum solor size sit amt',
                            likes: 0,
                            disLikes: 0,
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'sumit',
    text: 'lorem epsum solor size sit amt',
    likes: 0,
    disLikes: 0,
    replies: [
      {
        name: 'sumit',
        text: 'lorem epsum solor size sit amt',
        likes: 0,
        disLikes: 0,
        replies: [],
      },
      {
        name: 'sumit',
        text: 'lorem epsum solor size sit amt',
        likes: 0,
        disLikes: 0,
        replies: [],
      },
      {
        name: 'sumit',
        text: 'lorem epsum solor size sit amt',
        likes: 0,
        disLikes: 0,
        replies: [
          {
            name: 'sumit',
            text: 'lorem epsum solor size sit amt',
            likes: 0,
            disLikes: 0,
            replies: [
              {
                name: 'sumit',
                text: 'lorem epsum solor size sit amt',
                likes: 0,
                disLikes: 0,
                replies: [
                  {
                    name: 'sumit',
                    text: 'lorem epsum solor size sit amt',
                    likes: 0,
                    disLikes: 0,
                    replies: [
                      {
                        name: 'sumit',
                        text: 'lorem epsum solor size sit amt',
                        likes: 0,
                        disLikes: 0,
                        replies: [
                          {
                            name: 'sumit',
                            text: 'lorem epsum solor size sit amt',
                            likes: 0,
                            disLikes: 0,
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'sumit',
    text: 'lorem epsum solor size sit amt',
    likes: 0,
    disLikes: 0,
    replies: [],
  },
  {
    name: 'sumit',
    text: 'lorem epsum solor size sit amt',
    likes: 0,
    disLikes: 0,
    replies: [],
  },
  {
    name: 'sumit',
    text: 'lorem epsum solor size sit amt',
    likes: 0,
    disLikes: 0,
    replies: [],
  },
];

const Comment = ({ data }) => {
  const [replyQuery, setReplyQuery] = useState('');
  const { name, text, likes, disLikes, replies } = data;
  const [isToggle, setIsToggle] = useState(false);
  const [like, setLike] = useState(likes);
  const [disLike, setDisLike] = useState(disLikes);

  // Use state to manage replies
  const [newReplies, setNewReplies] = useState(replies);

  // parent comment
  return (
    <div className="flex flex-col shadow-sm bg-white p-2 rounded-lg my-2">
      <div className="flex items-center">
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
          <div className="flex flex-col">
            <div className="flex">
              <button
                className="px-3 "
                onClick={() => {
                  if (like == 0) {
                    setLike(1);
                    setDisLike(0);
                  } else {
                    setLike(0);
                  }
                }}
              >
                <FontAwesomeIcon icon={faThumbsUp} /> {like}
              </button>
              <button
                className="px-3 "
                onClick={() => {
                  if (disLike == 0) {
                    setLike(0);
                    setDisLike(1);
                  } else {
                    setDisLike(0);
                  }
                }}
              >
                <FontAwesomeIcon icon={faThumbsDown} /> {disLike}
              </button>
              <button className="px-3  text-blue-600" onClick={() => setIsToggle(true)}>
                Reply
              </button>
            </div>
            {isToggle && (
              <div className="flex m-2">
                <input
                  className=" w-[900px] overflow-y-auto border border-b-black bg-white h-8 "
                  value={replyQuery}
                  placeholder="Add a reply"
                  onChange={(e) => setReplyQuery(e.target.value)}
                />
                <button
                  onClick={() => {
                    setNewReplies([
                      ...newReplies,
                      {
                        name: generateRandomName(),
                        text: replyQuery,
                        replies: [],
                      },
                    ]);
                    setIsToggle(false);
                  }}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Child recursive call */}
      {newReplies && newReplies.length > 0 && (
        <div className="pl-5 ml-5 border border-l-black">
          <CommentList comments={newReplies} />
        </div>
      )}
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => <Comment key={index} data={comment} />);
};

const CommentContainer = () => {
  const [commentQuery, setCommentQuery] = useState('');
  const [commentData, setCommentData] = useState(CommentData);

  return (
    <div>
      <div className="flex">
        <img
          className="h-8 mx-4"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt="Profile Image"
        />
        <input
          className=" w-[700px] overflow-y-auto border border-b-black bg-white h-8 mr-4s "
          value={commentQuery}
          placeholder="Add a Comment..."
          onChange={(e) => setCommentQuery(e.target.value)}
        />
        <button
          className="  rounded-2xl text-white  bg-blue-600"
          onClick={() => {
            setCommentData([
              ...commentData,
              { name: generateRandomName(), text: commentQuery, likes: 0, disLikes: 0, replies: [] },
            ]);
          }}
        >
          Comment
        </button>
      </div>
      <div>
        <h1 className="font-bold text-xl">Comments :</h1>
        <CommentList comments={commentData} />
      </div>
    </div>
  );
};

export default CommentContainer;
