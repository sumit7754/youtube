import React from 'react';

const CommentData = [
  {
    name: 'sumit',
    text: 'lorem epsum solor size sit amt',
    replies: [
      {
        name: 'sumit',
        text: 'lorem epsum solor size sit amt',
        replies: [],
      },
      {
        name: 'sumit',
        text: 'lorem epsum solor size sit amt',
        replies: [],
      },
      {
        name: 'sumit',
        text: 'lorem epsum solor size sit amt',
        replies: [
          {
            name: 'sumit',
            text: 'lorem epsum solor size sit amt',
            replies: [
              {
                name: 'sumit',
                text: 'lorem epsum solor size sit amt',
                replies: [
                  {
                    name: 'sumit',
                    text: 'lorem epsum solor size sit amt',
                    replies: [
                      {
                        name: 'sumit',
                        text: 'lorem epsum solor size sit amt',
                        replies: [
                          {
                            name: 'sumit',
                            text: 'lorem epsum solor size sit amt',
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
    replies: [
      {
        name: 'sumit',
        text: 'lorem epsum solor size sit amt',
        replies: [],
      },
      {
        name: 'sumit',
        text: 'lorem epsum solor size sit amt',
        replies: [],
      },
      {
        name: 'sumit',
        text: 'lorem epsum solor size sit amt',
        replies: [
          {
            name: 'sumit',
            text: 'lorem epsum solor size sit amt',
            replies: [
              {
                name: 'sumit',
                text: 'lorem epsum solor size sit amt',
                replies: [
                  {
                    name: 'sumit',
                    text: 'lorem epsum solor size sit amt',
                    replies: [
                      {
                        name: 'sumit',
                        text: 'lorem epsum solor size sit amt',
                        replies: [
                          {
                            name: 'sumit',
                            text: 'lorem epsum solor size sit amt',
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
    replies: [],
  },
  {
    name: 'sumit',
    text: 'lorem epsum solor size sit amt',
    replies: [],
  },
  {
    name: 'sumit',
    text: 'lorem epsum solor size sit amt',
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  // parent comment
  return (
    <div className="flex flex-col shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <div className="flex items-center">
        <img
          className="h-12 w-12 rounded-full"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt="Profile Image"
        />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
      {/**child recurive call */}
      {replies && replies.length > 0 && (
        <div className="pl-5 ml-5 border border-l-black">
          <CommentList comments={replies} />
        </div>
      )}
    </div>
  );
};

// comment Container -> par[0] text -> chidl

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => <Comment key={index} data={comment} />);
};

const CommentContainer = () => {
  return (
    <div>
      <h1 className="font-bold text-xl">Comments :</h1>
      <CommentList comments={CommentData} />
    </div>
  );
};

export default CommentContainer;
