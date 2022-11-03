import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String },
    content: String,
    author: String,
  },
  { timestamps: true },
);
