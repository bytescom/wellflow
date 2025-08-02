// import mongoose from 'mongoose';
// import { nanoid } from 'nanoid';

// const userSchema = new mongoose.Schema({
//   id: {
//     type: String,
//     default: () => nanoid(12),
//     unique: true,
//     immutable: true,
//     index: true
//   },
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 2,
//     maxlength: 50
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     lowercase: true,
//     validate: {
//       validator: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
//       message: 'Invalid email format'
//     }
//   },
//   password_hash: {
//     type: String,
//     required: true
//   },
//   created_at: {
//     type: Date,
//     default: Date.now,
//     immutable: true
//   }
// });

// userSchema.index({ id: 1, email: 1 });

// export default mongoose.model('User', userSchema);

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

export default mongoose.model('user', userSchema);
