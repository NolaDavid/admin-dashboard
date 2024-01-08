import mongoose, {model, Schema, models} from "mongoose";

const OrderSchema = new Schema({
  name: String,
  items: [{type: String}],
  total: String
}, {
  timestamps: true,
});



export const Order = models.Order || model('Order', OroductSchema);