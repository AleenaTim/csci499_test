import mongoose from 'mongoose';

const FormDataSchema = new mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const FormDataModel = mongoose.model('users', FormDataSchema);

export default FormDataModel;
