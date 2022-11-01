import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: String,
    author: String,
  },
  { timestamps: true },
);
