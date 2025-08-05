// import mongoose from 'mongoose';

// const sessionSchema = new mongoose.Schema({
//   user_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   title: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   tags: {
//     type: [String],
//     default: []
//   },
//   json_file_url: {
//     type: String,
//     required: true
//   },
//   status: {
//     type: String,
//     enum: ['draft', 'published'],
//     default: 'draft'
//   },
//   created_at: {
//     type: Date,
//     default: Date.now
//   },
//   updated_at: {
//     type: Date,
//     default: Date.now
//   }
// });

// sessionSchema.pre('save', function(next) {
//   this.updated_at = Date.now();
//   next();
// });

// export default mongoose.model('Session', sessionSchema);

import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  tags: [String],
  json_file_url: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  }
});

export default mongoose.model('Session', sessionSchema);