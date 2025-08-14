import mongoose from "mongoose"

try {
    mongoose.connect()
} catch (error) {
    console.error("Error connecting to MongoDB:", error)
}