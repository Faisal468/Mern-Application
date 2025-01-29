const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection URL
const dbURI = "mongodb://localhost:27017/signupDB"; 

// Connect to MongoDB
//                            
   
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

 

 // Define// schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

  


// Hash the password before saving the user
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10); // Hash password before saving
  }
  next();
});
//                                        
const User = mongoose.model('User', userSchema);

// Signup route
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create new user
    const newUser = new User({ name, email, password });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Error: ' + error.message });
  }
});



const signedinusersSchema = new mongoose.Schema({
  email: { type: String, required: true },
  signInTime: { type: Date, default: Date.now }, // Automatically records the sign-in time
});

const Signedinuser = mongoose.model("Signedinuser", signedinusersSchema);

// Signin Route
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("No user found with email:", email);
      return res.status(400).json({ message: 'User not found' });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password mismatch for email:", email);
      return res.status(400).json({ message: 'Incorrect password' });
    }

    // Save sign-in info to 'signedinusers' collection
    const signedInUser = new Signedinuser({ email });
    await signedInUser.save();
    console.log("Signin info saved to signedinusers collection for email:", email);

    // Respond with success
    res.status(200).json({ message: 'User signed in successfully' });
  } catch (error) {
    console.error("Error during signin process:", error);
    res.status(500).json({ message: 'Error: ' + error.message });
  }
});



// Define Booking schema
const bookingSchema = new mongoose.Schema({
  car: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  additionalRequests: { type: String },
});

const Booking = mongoose.model("Booking", bookingSchema);

// Booking Route
app.post("/book", async (req, res) => {
  const { car, name, email, date, time, additionalRequests } = req.body;

  if (!car || !name || !email || !date || !time) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const newBooking = new Booking({
      car,
      name,
      email,
      date,
      time,
      additionalRequests,
    });

    // Save booking data to the database
    await newBooking.save();
    res.status(201).json({ message: "Booking submitted successfully!" });
  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(400).json({ message: "Error: " + error.message });
  }
});


app.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Error: " + error.message });
  }
});

app.delete("/bookings/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBooking = await Booking.findByIdAndDelete(id);
    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ message: "Error: " + error.message });
  }
});

app.put("/bookings/:id", async (req, res) => {
  const { id } = req.params;
  const { car, name, email, date, time, additionalRequests } = req.body;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { car, name, email, date, time, additionalRequests },
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking updated successfully", updatedBooking });
  } catch (error) {
    console.error("Error updating booking:", error);
    res.status(500).json({ message: "Error: " + error.message });
  }
});





// Define Quote schema
const quoteSchema = new mongoose.Schema({
  pickupPoint: { type: String, required: true },
  via: { type: String }, 
  dropOffPoint: { type: String, required: true },
});

const Quote = mongoose.model("Quote", quoteSchema);


// Quote Route
app.post("/quote", async (req, res) => {
  console.log("Request received:", req.body); // Debug log
  const { pickupPoint, via, dropOffPoint } = req.body;

  if (!pickupPoint || !dropOffPoint) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const newQuote = new Quote({
      pickupPoint,
      via,
      dropOffPoint,
    });

    // Save quote data to the database
    await newQuote.save();
    res.status(201).json({ message: "Quote saved successfully!" });
  } catch (error) {
    console.error("Error saving quote:", error);
    res.status(400).json({ message: "Error: " + error.message });
  }
});





// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



