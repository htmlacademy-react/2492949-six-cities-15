export type TReviews = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
};

export type TReviewComment = {
  rating: number;
  comment: string;
};
