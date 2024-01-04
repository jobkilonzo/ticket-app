import  {Schema, models, model} from 'mongoose'

const ticketSchema = new Schema(
    {
        title: String,
        description: String,
        category: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean
    },
    {timestamps: true}
)
const Ticket = models.Ticket || model("Ticket", ticketSchema)
export default Ticket